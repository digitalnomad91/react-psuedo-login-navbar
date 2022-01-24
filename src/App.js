import react from 'react';
import Home from './components/Home';
import Food from './components/Food';
import Stuff from './components/Stuff';
import StuffItem from './components/StuffItem';
import NavigationBar from './components/NavigationBar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/* 404 page not found */
function NotFound() {
  return (
    <div>Not FOund</div>
  );
}

function App() {

  /* Create user state variable for logged in / out state */
  const [user, setUser] = react.useState({});

  return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar setUser={setUser} user={user}></NavigationBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/food" element={<Food />} />
              <Route path="/stuff" element={<Stuff />} />
              <Route
                path="stuff/:stuffId"
                element={<StuffItem />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;