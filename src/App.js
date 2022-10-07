import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      {
        !user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Router>
              <Sidebar />
              <Routes>
                <Route path="/rooms/:roomId" element={ <Chat /> } />
                <Route path="/" element={ <Chat /> } />
              </Routes>
            </Router>
          </div>
        )
      }
    </div>
  );
}

export default App;
