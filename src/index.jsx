import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import{BrowserRouter ,Routes ,Route} from "react-router-dom";
import App from './App';
import Home from './component/home';


export default function Index(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

reportWebVitals();
