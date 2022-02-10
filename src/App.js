import React from 'react'
import "./App.css";
import ComponentA from './components/ComponentA'

export const UserContext = React.createContext()
export const NameContext = React.createContext()

function App() {
  return <div className="App">
    <UserContext.Provider value='JOB'>
      <NameContext.Provider value='kipchogeeeee'>
          <ComponentA />
      </NameContext.Provider>
    </UserContext.Provider>
  </div>;
}

export default App;
