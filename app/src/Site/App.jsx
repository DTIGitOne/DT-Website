import React from 'react';
import { Navigate, Route, Routes , BrowserRouter as Router } from 'react-router-dom';
import Main from '../Sites/Main';
import Portfolio from '../Sites/Portfolio';
import Projects from '../Sites/Projects';

const App = () => {
   return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/Main" />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
   );
}

export default App;

