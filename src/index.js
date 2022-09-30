import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Testimonials from './routes/Testimonials';
import Offerings from './routes/Offerings';
import Students from './routes/Students';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path ="/" element = {<Home/>} />
    <Route path = "/about" element = {<About/>}/>
    <Route path = "/contact" element = {<Contact/>}/>
    <Route path ="/students" element = {<Students/>}/>
    <Route path ="/offerings" element = {<Offerings/>}/>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
