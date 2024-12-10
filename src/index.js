import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './Parent';
import Cardparent from './Cardparent';
import { Map } from './Map';
import Tailwind from './Tailwind';
import Work from './Work';
import { UseState } from './UseState';
import Toggle from './Toggle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fetch } from './Fetch';
import Weather from './We';
import Works from './Works';
import Wbutton from './Wbutton';
import Netflicx1 from './Netflicx1';
import Wbparant from './Wbparant';
import Idpass from './Idpass';
import Formhandle from './Formhandle';
import Key from './Key';
import { Main } from './rendering/Main';
import Calculator from './Calculator';
import Cal from './Cal';
import Main1 from './admin/Main1';
import Contextprovider from './contextapi/Contextprovider';
import Contextuser from './contextapi/Contextuser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <BrowserRouter>
 <Routes>
  <Route path='/login' element={<Map></Map>}></Route>
  <Route path='/logi' element={<UseState></UseState>}></Route>
  <Route path='/log' element={<Toggle></Toggle>}></Route>
  <Route path='/lo' element={<Work></Work>}></Route>
  <Route path='/l' element={<Cardparent></Cardparent>}></Route>
  <Route path='/loo' element={<Fetch></Fetch>}></Route>
  <Route path='/we' element={<Weather></Weather>}></Route>
  <Route path='/works' element={<Works></Works>}></Route>
  <Route path='/Wbutton' element={<Wbutton></Wbutton>}></Route>
  <Route path='/Netflicx1' element={<Netflicx1></Netflicx1>}></Route>
  <Route path='/Wbparant' element={<Wbparant/>}/>
  <Route path='/Idpass/:id' element={<Idpass/>}/>
  <Route path='/Form' element={<Formhandle/>}/>
  <Route path='/Key' element={<Key></Key>}/>
  <Route path='/Main' element={<Main></Main>}/>
  <Route path='/Calculator' element={<Calculator/>}/>
  <Route path='/Cal' element={<Cal></Cal>}></Route>
  <Route path='/Mains' element={<Main1></Main1>}></Route>
  </Routes></BrowserRouter> */}
  <Contextprovider>
    <Contextuser></Contextuser>
  </Contextprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
