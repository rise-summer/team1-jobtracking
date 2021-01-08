import React from 'react'
import {useState, createContext} from 'react'

export const TestContext = createContext()

export const TestProvider = (props) => {
  const [movies, setMovies] = useState('omg i can access state!')

  return (
    <TestContext.Provider value={[movies, setMovies]}>
      {props.children}
    </TestContext.Provider>
  );
}