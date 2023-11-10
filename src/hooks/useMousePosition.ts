import { useState, useEffect } from 'react'

type Position = {
  x: number | null
  y: number | null
}

const useMousePosition = (): Position => {
  const [mousePosition, setMousePosition] = useState<Position>({
    x: null,
    y: null,
  })

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
  }, [mousePosition])

  return mousePosition
}

export default useMousePosition