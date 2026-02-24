'use client'

import { useEffect, useRef, useState } from 'react'
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiSocketdotio, SiNextdotjs } from 'react-icons/si'

// Skill list using react-icons
const skillList = [
  { name: 'JavaScript', icon: <SiJavascript className="w-10 h-10 text-yellow-400" /> },
  { name: 'React.js', icon: <SiReact className="w-10 h-10 text-blue-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-10 h-10 text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="w-10 h-10 text-gray-500" /> },
  { name: 'Socket.io', icon: <SiSocketdotio className="w-10 h-10 text-purple-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-10 h-10 text-white" /> },
]

const MarqueeWrapper = ({ className = '' }) => {
  const elementRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(0)

  const marqueeAnimation = (element, elementWidth, windowWidth) => {
    if (!element) return
    element.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(${windowWidth - elementWidth}px)` },
      ],
      {
        duration: 20000,
        easing: 'linear',
        direction: 'alternate',
        iterations: Infinity,
      }
    )
  }

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    if (!elementRef.current || windowWidth === 0) return
    const elementWidth = elementRef.current.getBoundingClientRect().width
    marqueeAnimation(elementRef.current, elementWidth, windowWidth)
  }, [windowWidth])

  return (
    <div className={`relative overflow-x-hidden bg-secondary w-full ${className}`}>
      <div
        ref={elementRef}
        className="w-max whitespace-nowrap flex items-center gap-10 p-5 lg:p-7"
      >
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeWrapper
