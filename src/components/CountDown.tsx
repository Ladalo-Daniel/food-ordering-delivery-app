"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2024-02-02")

export default function CountDown() {
  return (
    <div className=' text-yellow-600 px-8 py-2 text-4xl font-bold shadow-yellow-600'>
      <Countdown date={endingDate} />
    </div>
  )
}
