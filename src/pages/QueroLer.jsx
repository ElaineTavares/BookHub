import React from 'react'
import './QueroLer.css'
import NavBar from '../components/NavBar'
import { useQueroLerContext } from '../contexts/QueroLerContext'
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function QueroLer() {
  const { queroLer } = useQueroLerContext();

  return (
    <section className='quero_ler'>
        <NavBar/>
        <h2 className='h2'>Minha Lista de Leitura</h2>
        <div className="container">
          {queroLer.map((quero) => {
            return <Card {...quero} key={quero.id}/>
          })}
        </div>
        <Footer/>
    </section>
    
  )
}
