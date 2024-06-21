import { createContext, useContext, useState } from "react";

export const QueroLerContext = createContext();
QueroLerContext.displayName = "QueroLer";

export default function QueroLerProvider({children}){
    const [queroLer, setQueroLer] = useState([]);

    return (
        <QueroLerContext.Provider 
            value={{queroLer, setQueroLer}}>
            {children}
        </QueroLerContext.Provider>
    )
}



export function useQueroLerContext() {
   
    const {queroLer, setQueroLer} = useContext(QueroLerContext)

    function adicionarQueroLer(novoQueroLer){
        const queroLerRepetido = queroLer.some(item => item.id === novoQueroLer.id)

        let novaLista = [...queroLer];

        if(!queroLerRepetido) {
            alert("Livro adicionado na sua lista com sucesso!")
            novaLista.push(novoQueroLer);
            return setQueroLer(novaLista);      
        }

        
            alert('Livro excluído da sua lista!')
            novaLista.splice(novaLista.indexOf(novoQueroLer), 1);
            return setQueroLer(novaLista);
       

       
    }

    return{
        queroLer,
        adicionarQueroLer,
       
       
    }  

}








