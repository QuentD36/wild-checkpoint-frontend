import {Route, BrowserRouter, Routes } from 'react-router-dom';
import Continents from '../pages/Continents';
import ContinentDetails from '../pages/ContinentDetails';
import Error404 from '../pages/Error';

export default function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Continents/>} />
                <Route path="/continents/:code" element={<ContinentDetails/>} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
  );
}