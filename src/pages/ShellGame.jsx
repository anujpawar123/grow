import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Controls from '../components/Controls';
import Cup from '../components/Cup';
import '../styles/index.css';

const NUM_CUPS = 3;
const SHUFFLE_COUNT = 7;
const SHUFFLE_SPEED = 0.3;

export default function ShellGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isDiamondVisible, setIsDiamondVisible] = useState(false);
  const [diamondPosition, setDiamondPosition] = useState(1); // 0, 1, or 2
  const [cupPositions, setCupPositions] = useState([0, 1, 2]); // Tracks logical positions
  const [cash, setCash] = useState(0.00); // Player's cash balance
  
  const cupRefs = useRef([]);

  // Calculate pixel positions based on container width
  const getXPosition = (posIndex) => {
    // Moved further left to 41% center (mimicking a total 20vh shift on desktop)
    // using strictly absolute percentages to prevent mobile distortion.
    if (posIndex === 0) return '30%'; 
    if (posIndex === 1) return '41%'; 
    if (posIndex === 2) return '52%'; 
    return '41%';
  };

  useEffect(() => {
    // Initialize positions
    cupRefs.current.forEach((cup, idx) => {
      if (cup) {
        gsap.set(cup, { left: getXPosition(idx), top: '34%', yPercent: 0, xPercent: -50 });
      }
    });
  }, []);

  const startGame = async () => {
    if (isPlaying) return;
    
    // Prevent starting if cash is 0
    if (cash <= 0) {
      // You can add visual feedback here later if desired
      return;
    }

    setIsPlaying(true);
    setIsClickable(false);

    // Randomize the diamond's starting position for this round
    const newDiamondPos = Math.floor(Math.random() * 3);
    setDiamondPosition(newDiamondPos);

    // Wait a brief moment to ensure React renders the diamond in its new location
    await new Promise(r => setTimeout(r, 50));

    // 1. Reveal where the diamond is initially
    const initialDiamondCupIdx = cupPositions.findIndex(p => p === newDiamondPos);
    const targetCup = cupRefs.current[initialDiamondCupIdx];

    setIsDiamondVisible(true);
    // Lift cup using percentage of its own height so it scales perfectly on mobile
    await gsap.to(targetCup, { yPercent: -70, duration: 0.5, ease: "power2.out" });
    // Wait a bit
    await new Promise(r => setTimeout(r, 800));
    // Lower cup
    await gsap.to(targetCup, { yPercent: 0, duration: 0.5, ease: "power2.in" });
    setIsDiamondVisible(false);

    // 2. Start shuffling
    let currentPositions = [...cupPositions];
    
    for (let i = 0; i < SHUFFLE_COUNT; i++) {
      // Pick two random indices to swap
      let idx1 = Math.floor(Math.random() * NUM_CUPS);
      let idx2 = Math.floor(Math.random() * NUM_CUPS);
      while (idx1 === idx2) {
        idx2 = Math.floor(Math.random() * NUM_CUPS);
      }

      const cup1 = cupRefs.current[idx1];
      const cup2 = cupRefs.current[idx2];

      const pos1 = currentPositions[idx1];
      const pos2 = currentPositions[idx2];

      // Determine movement depth based on distance
      const distance = Math.abs(pos1 - pos2);
      const scaleAmount = distance === 2 ? 1.2 : 1.1;
      const shrinkAmount = distance === 2 ? 0.8 : 0.9;
      const yAmount = distance === 2 ? 20 : 10;

      // Bring one cup to front, push other to back
      gsap.set(cup1, { zIndex: 10 });
      gsap.set(cup2, { zIndex: 1 });

      const tl = gsap.timeline();
      
      // X Movement (full duration)
      tl.to(cup1, { left: getXPosition(pos2), duration: SHUFFLE_SPEED, ease: "power1.inOut" }, 0);
      tl.to(cup2, { left: getXPosition(pos1), duration: SHUFFLE_SPEED, ease: "power1.inOut" }, 0);

      // Depth/Y Movement (yoyo creates the smooth arc and scale change, going out and back in)
      tl.to(cup1, { scale: scaleAmount, yPercent: yAmount, duration: SHUFFLE_SPEED / 2, yoyo: true, repeat: 1, ease: "power1.inOut" }, 0);
      tl.to(cup2, { scale: shrinkAmount, yPercent: -yAmount, duration: SHUFFLE_SPEED / 2, yoyo: true, repeat: 1, ease: "power1.inOut" }, 0);

      // Reset zIndex after swap to keep stacking clean
      tl.set([cup1, cup2], { zIndex: 5 });

      await tl;

      // Update logical positions array
      currentPositions[idx1] = pos2;
      currentPositions[idx2] = pos1;
    }

    setCupPositions(currentPositions);
    setIsPlaying(false);
    setIsClickable(true);
  };

  const handleCupClick = async (id) => {
    if (!isClickable) return;
    setIsClickable(false);
    
    // Always make the diamond visible since we are lifting all cups
    setIsDiamondVisible(true);

    // Lift all cups to reveal where the stone is
    const allCups = cupRefs.current;
    await gsap.to(allCups, { yPercent: -70, duration: 0.5, ease: "power2.out" });
    
    // Reset game state after a delay
    setTimeout(async () => {
      await gsap.to(allCups, { yPercent: 0, duration: 0.5, ease: "power2.in" });
      setIsDiamondVisible(false);
      setIsPlaying(false); // Allow the user to start a new game
    }, 2000);
  };

  return (
    <div className="game-container">
      <div className="play-area">
        <div className="cups-container">
          {[0, 1, 2].map((id) => (
            <Cup
              key={id}
              id={id}
              ref={el => cupRefs.current[id] = el}
              hasDiamond={cupPositions[id] === diamondPosition && isDiamondVisible}
              onClick={handleCupClick}
              isClickable={isClickable}
            />
          ))}
        </div>
        <div className="history-panel">
          {/* Static placeholder for history, as requested to not make it functional */}
        </div>
      </div>
      <Controls onRandomClick={startGame} isPlaying={isPlaying} />
      <div className="cash-balance">Cash {cash.toFixed(2)}</div>
    </div>
  );
}
