import React from 'react'
import './BotaoJaLi.css'

export default function BotaoJaLi({onClick}) {
  return (
    <button onClick={onClick} className='botao'>Ja Li!</button>
  )
}