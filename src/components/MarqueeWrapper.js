'use client'

import { useEffect, useRef, useState } from 'react'
import Wave from 'react-wavify'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiNextdotjs,
} from 'react-icons/si'

// Skill list
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
    <div className={`relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 w-full ${className}`}>
      
      {/* Skills Marquee */}
      <div
        ref={elementRef}
        className="relative z-10 w-max whitespace-nowrap flex items-center gap-10 p-5 lg:p-7"
      >
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Wave Background */}
<Wave
  fill="url(#secondaryWave)"
  paused={false}
  options={{
    height: 70,
    amplitude: 35,
    speed: 0.2,
    points: 4,
  }}
  className="absolute bottom-0 left-0 w-full"
>
  <defs>
    <linearGradient id="secondaryWave" gradientTransform="rotate(90)">
      <stop offset="0%" stopColor="#0f2027" />
      <stop offset="50%" stopColor="#203a43" />
      <stop offset="100%" stopColor="#2c5364" />
    </linearGradient>
  </defs>
</Wave>
    </div>
  )
}

export default MarqueeWrapper