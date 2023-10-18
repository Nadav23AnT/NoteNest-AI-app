"use client";
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter 
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
        .typeString('Powered By AI 🎊')
        .pauseFor(1000)
        .deleteAll()
        .typeString('✨Dream big. Work hard.')
        .start();
      }}

    />
  )
}

export default TypewriterTitle