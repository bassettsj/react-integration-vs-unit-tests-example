import React from "react"

export default function CounterBtn({ onPress, children }) {
  const onClick = e => {
    e.preventDefault()
    onPress()
  }
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  )
}
