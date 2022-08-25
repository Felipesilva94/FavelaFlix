import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Flix from '../assets/flix.jpg'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
   background-image: url(${Flix});
   background-size: cover;
   background-repeat: no-repeat;
   width: 100%;
   height: 100vh;
   overflow: hidden;
   opacity: 1s;
  }
  p{
    color: white;
  }
  a{
    text-decoration: none;
  }
`

const Contener = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;

padding: 40px;
`
const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 70%;







h1{
  font-size: 4rem;
  color: white;
  }
`

export default class shows extends React.Component {

  state = {
    frutas: [
      'uva',
      'limao',
      'pera',
      'morango',
      'tomate',
      'abacaxi',
      'maça',
      'banana',
      'tangerina',
      'melancia'
    ],
    listaFiltrada:[]
  }
  handleFrutas = (e) =>{
    const frutasFiltrada = this.state.frutas.filter(item => {
      if(item.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
          return true
      }else {
        return ''
      }
    })
      this.setState({listaFiltrada: frutasFiltrada})

      if(e.target.value === ''){
        this.setState({listaFiltrada:[]})
      }
  }
  render() {
    return (
      <Contener>
         <GlobalStyle />
        {/* <input  onChange={this.handleFrutas}/> */}
        {this.state.listaFiltrada.map(item => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}

        <Box >
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
        </Box>
      </Contener>
    )
  }
}
