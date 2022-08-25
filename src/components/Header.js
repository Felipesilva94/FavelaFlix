import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import Home from './Home';
import Shows from './Shows';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

const Header = styled.header`
width: 100%;
height: 10vh;
border-bottom: solid red;
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: black;

h3{
  font-size: 1.2rem;
  color: red;
  font-weight: 800;
}

@media (max-width:900px) {
  background-color: black;
}
`

  export default class App extends React.Component {
    render() {
      return (
          <Router>
              <Header>
              <Link to="/">
              <h3>FavelaFlix</h3>
            </Link>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/movie">
              <p>Movie</p>
            </Link>
            <Link to="/show">
              <p>Show</p>
            </Link>
              </Header>

            <Routes>
              <Route path="/" element={ < Home/>} />
              <Route path="Movie" element={ <Movie />} />
              <Route path="Show" element={ <Shows />} />
            </Routes>

          </Router>
  
        );
      }
    }