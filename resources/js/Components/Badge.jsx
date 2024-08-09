import React from 'react'

export default function Badge({ children }) {
  return (
    <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
      {children}
    </span>
  )
}
