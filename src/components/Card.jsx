import React from 'react'
import './Card.css'
import { useQueroLerContext } from '../contexts/QueroLerContext'
import favoritar from '/imagens/botao_quero_ler.png'
import desfavoritar from '/imagens/botao_ja_li.png'




export default function Card({capa, titulo, id, autor, descricao, genero}) {
  const { queroLer, adicionarQueroLer} = useQueroLerContext();
  
  // console.log(queroLer)

  const ehQueroLer = queroLer.some((quero) => quero.id === id);
  let icone = ehQueroLer ? favoritar : favoritar



  return (
    <div className='card' id={id}>
      <div className='container_capa'>
          <img className='capa' src={capa} onClick={()=> console.log('clicou')}/>
              <img className='coracao' src={icone} alt="coracao de favorito"  onClick={() => {
              adicionarQueroLer({id, titulo, capa, autor, descricao})
            }} />      
      </div>
        
        <div className='container_texto'>
            <h2 className='titulo'>{titulo}</h2>
            <h2 className='autor'>{autor}</h2>
            <h3>Gênero: {genero}</h3>
            <p className='descricao'>{descricao}</p>
        </div>    
    </div>
  )
}
