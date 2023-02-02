import React, { useState } from 'react';
import './App.css';

import HelloDojo from './components/HelloDojo';
import Nav from './components/Nav';
import PersonCard from './components/PersonCard';
import UserForm from './components/UserForm';

function App() {
  const [showDojo, setShowDojo] = useState(false)
  const handleHelloDojo = () => {
    setShowDojo(!showDojo)
  }

  const [showForm, setShowForm] = useState(false)
  const handleForm = () => {
    setShowForm(!showForm)
  }

  const [showJaneDoe, setShowJaneDoe] = useState(false)
  const handleJaneDoe = () => {
    setShowJaneDoe(!showJaneDoe)
  }
  const [showJohnSmith, setShowJohnSmith] = useState(false)
  const handleJohnSmith = () => {
    setShowJohnSmith(!showJohnSmith)
  }
  const [showMillardFillmore, setShowMillardFillmore] = useState(false)
  const handleMillardFillmore = () => {
    setShowMillardFillmore(!showMillardFillmore)
  }
  const [showMariaSmith, setShowMariaSmith] = useState(false)
  const handleMariaSmith = () => {
    setShowMariaSmith(!showMariaSmith)
  }

  return (
    <div className="App">
      <Nav />
      <button onClick={handleForm}>User Form</button>
      {showForm ? <UserForm /> : null}
      <button onClick={handleHelloDojo}>Hello Dojo</button>
      {showDojo ? <HelloDojo value={'Alyssa'} /> : null}
      <button onClick={() => alert('This button has been clicked')}>Click Me</button>
      <div>
        <h3>Person Cards</h3>
        {showJaneDoe ?
          (<span>
            <PersonCard
              firstName={'Jane'}
              lastName={'Doe'}
              age={45}
              hairColor={'Black'}
            />
            <button onClick={handleJaneDoe}>Close Jane Doe's Card</button>
          </span>) : <button onClick={handleJaneDoe}>Jane Doe's Card</button>}

        {showJohnSmith ?
          (<span>
            <PersonCard
              firstName={'John'}
              lastName={'Smith'}
              age={88}
              hairColor={'Brown'}
            />
            <button onClick={handleJohnSmith}>Close John Smith's Card</button>
          </span>) : <button onClick={handleJohnSmith}>John Smith's Card</button>}

        {showMillardFillmore ?
          (<span>
            <PersonCard
              firstName={'Millard'}
              lastName={'Fillmore'}
              age={50}
              hairColor={'Brown'}
            />
            <button onClick={handleMillardFillmore}>Close Millard Fillmore's Card</button>
          </span>) : <button onClick={handleMillardFillmore}>Millard Fillmore's Card</button>}

        {showMariaSmith ?
          (<span>
            <PersonCard
              firstName={'Maria'}
              lastName={'Smith'}
              age={62}
              hairColor={'Brown'}
            />
            <button onClick={handleMariaSmith}>Close Maria Smith's Card</button>
          </span>) : <button onClick={handleMariaSmith}>Maria Smith's Card</button>}
      </div>

    </div>
  );
}

export default App;
