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

@media (max-width:900px) {
  flex-wrap: wrap;
}

`
const Conteiner = styled.div`
  width: 45%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  border-bottom: 2px solid silver;
  border-radius: 10px;
  padding: 5px;


  h3 {
    color: white;
    max-width: 20%;
    
  }

  p {
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
    "https://api.themoviedb.org/3/movie/popular?api_key=a83c5fa3bb074fe41c058b4210e22cd8&language=en-US&page=1"
});

export default class Movie extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.GetApi();
  }

  GetApi = async () => {
    const PegandoApi = await MyApi_Movie.get();

    const InfoFilmes = PegandoApi.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({ movies: InfoFilmes  });

    console.log(PegandoApi);
  };

  render() {
    return (
      <Master>
        <GlobalStyle />
        {this.state.movies.map((item) => (
          <Conteiner>
            <>
              <h3>{item.title}</h3>
              <p>{item.overview}</p>
              <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="" />
            </>
          </Conteiner>
        ))}
      </Master>
    );
  }
}
