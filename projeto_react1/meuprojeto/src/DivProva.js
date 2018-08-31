import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

class DivProva extends Component {


  render() {
    const prova = this.props.prova;
    return (
      <div>
	<div>{prova.numero + "a Prova"}<br />{prova.distancia + " metros " + prova.estilo + " " + prova.categoria + " " + prova.sexo}</div>
	<div>
          <ol>
            {prova.inscricoes? prova.inscricoes.map((atleta) => <li key = {atleta.id}> {atleta.nome + '-' + atleta.TempoInscricao}</li>): "" }
          </ol>
        </div>
      </div>
    );
  }
}

export default DivProva;
