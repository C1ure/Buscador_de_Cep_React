import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";
import "./style.css";

function App() {

  const[input,setInput] = useState("");
  const[cep,setCep]= useState({});

  async function handleSearch(){
    if (input === ""){
      alert("Digite um Cep!")
      return;
    }


    try{
      const response =await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
    }catch{
      alert("opss! Erro ao buscar Cep")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador Cep</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite um Cep..."
        value={input}
        onChange={(event)=>setInput(event.target.value)}
        />
        <button
          className="buttonSearch"
          onClick={handleSearch}
         >
          <FiSearch size={22} color="#FFFFFF"/>
        </button>
      </div>
        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2 className="subtitle_Card">CEP:{cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>Complemento:{cep.complemento}</span>
            <span> {cep.bairro}</span>
           <span>{cep.localidade} - {cep.uf}</span>
         </main>
        )}
      
    </div>
  );
}

export default App;
