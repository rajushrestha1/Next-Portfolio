'use client'

import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs } from '@fortawesome/free-brands-svg-icons'

// Skill list using FontAwesome
const skillList = [
  { name: 'JavaScript', icon: faJs },
  { name: 'React.js', icon: faReact },
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
    <div className={`relative overflow-x-hidden w-full ${className}`}>
      <div
        ref={elementRef}
        className="w-max whitespace-nowrap flex items-center gap-10 p-5 lg:p-7"
      >
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-blue-500 w-10 h-10"
            />
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeWrapper
