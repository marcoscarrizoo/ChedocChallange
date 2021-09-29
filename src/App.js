import React, {useEffect} from 'react';
import { Route } from 'react-router';
import { getMovies, getSeries } from './redux/actions/actions';
import { useDispatch } from 'react-redux';
const data = require('./data/sample.json') 

console.log('data',data)

function App() {
const dispatch = useDispatch()

  useEffect(() => {
    console.log('holi')
  dispatch( getMovies())
  dispatch(getSeries())
  }, [])

  return (
 <React.Fragment>

 </React.Fragment>
  );
}

export default App;

