import React, { useState } from 'react';
import Navbar from './NavBar';
import CardWrapper from './CardWrapper';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // New state variable for the search term
 


  return (
    <div className="app">
          <Navbar setSearchTerm={setSearchTerm} />
          <CardWrapper searchTerm={searchTerm} />
        </div>
  );
}

export default App;