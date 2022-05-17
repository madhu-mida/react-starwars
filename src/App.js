import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import StarshipDisplay from './components/StartshipDisplay';

function App() {

  const [starship, setStarship] = useState(null);

  const getStarship = async () => {
    const response = await fetch(`https://swapi.dev/api/starships/`)

    const data = await response.json();

    setStarship(data)

    console.log(data)
  }

  const getPagination = async (url) => {
    console.log(url)
    const response = await fetch(url)

    const data = await response.json();

    setStarship(data)
  }

  useEffect(() => { getStarship() }, [])


  return (
    <div className="App">
      {starship && <StarshipDisplay starship={starship} />}
      {starship && <div>
        <Button className='pagination-button' disabled={!starship.previous} onClick={() => { getPagination(starship.previous) }}>Previous</Button>
        <Button className='pagination-button' disabled={!starship.next} onClick={() => { getPagination(starship.next) }}>Next</Button>
      </div>}

    </div>

  );
}

export default App;
