import React from 'react'

export default function ModalQueroLer({isOpen}) {
    if (isOpen){
        return <h2>Livro adcionado com sucesso</h2>
    }

    return null
 
}
