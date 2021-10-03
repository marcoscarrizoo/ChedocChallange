import React from 'react';
import { Route } from 'react-router';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';
import Series from './components/series/Series';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import './app.css'

function App() {


  return (
    
 <React.Fragment>
   <div className='page-container'>
   <Route path='/' component={NavBar}/>
   <Route exact path='/' component={Home}/>
  
   <Route path='/movies' component={Movies}/>
   <Route path='/series' component={Series}/>
   <div className='content-wrap'>
      <Route path='/' component={Footer}/>
   </div>
   </div>
 </React.Fragment>
  );
}

export default App;

