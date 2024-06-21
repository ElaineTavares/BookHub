import React, { useState } from 'react'
import './Inicio.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Busca from '../components/Busca'
import Card from '../components/Card'
import db from '../db.json'

export default function Inicio() {

  const [search, setSearch] = useState('')
  
    function aoDigitar(evento){
      setSearch(evento.target.value) 
      console.log(search)    
  }
 
   
        let palavraFiltrada = db.filter((item) => item.titulo.toLowerCase().includes(search.toLowerCase()) ||
        item.autor.toLowerCase().includes(search.toLowerCase()) ||
        item.genero.toLowerCase().includes(search.toLowerCase())     
  )
        
       
                                                        
  return (
    <div className='inicio'>
        <NavBar/>
        <div className='container'>
          <Busca 
            value={search}
            aoDigitar={aoDigitar}
          />
          <section className='container_card'>
            {palavraFiltrada.map((item) => {
              return  <Card key={item.id} {...item}/>
            })}
          </section>
        </div>
       
    
        <Footer/>
    </div>
  )
}
