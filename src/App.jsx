import React from 'react';
import { useState } from 'react';
import './style.css';

const App = () => {
  const [input, SetInput] = useState('');
  const [cep, SetCep] = useState({});

  async function handleSearch() {
    const response = await fetch(
      `https://viacep.com.br/ws/${input}/json/`,
    );
    console.log(response);
    const json = await response.json();
    SetCep(json);
  }

  return (
    <div className="contanier">
      <h1 className="title">Buscar CEP</h1>
      <div className="formContanier">
        <input
          className="contanierInput"
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={(e) => SetInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
         Enviar
        </button>
      </div>

      <main className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>Logadouro: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>
          Cidade: {cep.localidade} - {cep.uf}
        </span>
      </main>
    </div>
  );
};

export default App;
