import React from 'react'
import './Busca.css'
import { BsSearchHeart } from "react-icons/bs";

export default function Busca({aoDigitar, aoBuscar, value}) {
 
  return (
    <div className="busca">
        <h2>Qual livro você quer conhecer hoje?</h2>
        <h3>Digite o título, o nome do autor ou o gênero do livro</h3>
        <div className='container_lupa'> 
          <BsSearchHeart className='lupa' />
          <input value={value} onChange={aoDigitar} type="text" placeholder='Digite aqui' />
        </div>
    </div>
  )
}
