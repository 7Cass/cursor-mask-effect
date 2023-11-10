'use client';
import useMousePosition from "@/hooks/useMousePosition"
import { motion } from 'framer-motion';
import { useState } from "react";

import styles from './mask.module.css'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [maskScale, setMaskScale] = useState(50)
  const { x, y } = useMousePosition()
  const size = isHovered ? maskScale * 10 : maskScale

  const handleMouseToggle = (scale: number, hover: boolean): void => {
    setMaskScale(scale)
    setIsHovered(hover)
  }

  return (
    <main className="h-screen cursor-default">

      <motion.div
        animate={{
          WebkitMaskPosition: `${Number(x) - size / 2}px ${
            Number(y) - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        className={`${styles.mask} absolute w-full h-full flex items-center justify-center text-black bg-red-500`}>
        <h1 
          onMouseEnter={() => handleMouseToggle(50, true)}
          onMouseLeave={() => handleMouseToggle(50, false)}
          className="text-9xl font-light">I&apos;m a Software Developer</h1>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center bg-black text-red-500">
        <h1 className="text-9xl font-light">I don&apos;t know what am I doing</h1>
      </div>

    </main>
  )
}
