
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from "./routes"
import './App.css'
import SmoothScroll from './components/SmoothScroll';

const App: React.FC = () => {
  const element = useRoutes(routes);

  return <>
      <SmoothScroll>
        {element}
      </SmoothScroll>
  </>
}

export default App;