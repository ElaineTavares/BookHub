import React from 'react'
import './Botao.css'

export default function Botao({onClick, texto}) {
  return (
    <button onClick={onClick} className='botao'>{texto}</button>
  )
}
