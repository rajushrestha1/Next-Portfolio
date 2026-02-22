'use client'

import { useEffect, useRef } from 'react'
import { isInViewport } from '@/utils'
import { StarIcon } from '@/utils/icons'
import Image from 'next/image'

const TestimonialCard = ({ testimonial, handleActiveCard }) => {
  const { name, title, feedback, image, stars } = testimonial

  const cardRef = useRef(null)

  useEffect(() => {
    let observer

    if (cardRef.current) {
      observer = isInViewport(cardRef.current, handleActiveCard)
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [handleActiveCard])

  return (
    <div
      ref={cardRef}
      className="bg-secondary border-border flex max-w-full shrink-0 flex-col items-center justify-between gap-4 rounded-2xl border p-4 text-center sm:max-w-[425px]"
    >
      <p className="text-neutral text-center leading-8 before:content-['“'] after:content-['”']">
        {feedback}
      </p>

      <div>
        <div className="mb-4 flex items-center gap-1.5">
          {Array.from({ length: 5 }, (_, idx) => (
            <StarIcon
              key={idx}
              className={idx < stars ? 'text-tag' : 'text-transparent'}
            />
          ))}
        </div>

        <div>
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="mx-auto rounded-full"
          />
          <p className="text-neutral text-lg font-semibold">{name}</p>
          <p className="text-neutral/60 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard