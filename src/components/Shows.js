import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
   background-color: black;
  }

  p{
    color: white;
  }
`

const Master = styled.section`
display: flex;
flex-wrap: wrap;

`
const Conteiner = styled.div`

  width: 45%;
  margin: 20px auto 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  border-bottom: 2px solid silver;
  border-radius: 10px;
  padding: 5px;

  :hover{
    /* transform: scale(1.1); */
    box-shadow: 2px 0px 0px 1px silver;
  }

  h3 {
    color: white;
    max-width: 20%;
    
  }

  p {
    font-size: .8rem;
    color: white;
    max-width: 40%;
    }
  
  img {
    width: 30%;
  }

  @media (max-width:900px) {
 

  h3{
    max-width: 40%;
  }
  p{
  display: none;
  }
 
  img{
    width: 45%;
  }

  }
`;

const MyApi_Movie = axios.create({
  baseURL:
    `https://api.themoviedb.org/3/tv/popular?api_key=a83c5fa3bb074fe41c058b4210e22cd8&language=en-US&page=1`
});

export default class Shows extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.GetApi();
  }

  GetApi = async () => {
    const PegandoApi = await MyApi_Movie.get();

    const InfoFilmes = PegandoApi.data.results.map((item, index) => {
      return {
        nome: item.name,
        sinopse: item.overview,
        imagem: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
        
      };
    });
    this.setState({ movies: InfoFilmes });

    console.log(PegandoApi);
  };

  filterMovies = (e)=>{
    const Filtro = this.state.movies.filter(item => {
      if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
        return true
      }else{
        return ''
      }
    })

  this.setState({filmeFiltrado: Filtro})
  }

  render() {
    return (
      <Master>
        <GlobalStyle />
        {this.state.movies.map((item) => (
          <Conteiner>
            <>
              <h3>{item.nome}</h3>
              <img src={item.imagem} alt="" />
              <p>{item.sinopse}</p>
              
            </>
          </Conteiner>
        ))}
      </Master>
    );
  }
}
