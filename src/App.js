import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Departman } from './Departman';
import {Navigation} from "./Navigation";

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Personel from './deneme/Personel';
function App() {
  return (
   <div>
    {/* <Personel /> */}
    <BrowserRouter>

<div className="App">
<Navigation />

<Routes>

<Route exact path="/">
  <Home />

</Route>
<Route exact path="/departman">
  <Departman />

</Route>
</ Routes>
</div>
</BrowserRouter> 
   </div>
  );
}

export default App;



    /*<BrowserRouter>

    <div className="App">
    asdasdas    
 
    <Routes>

    <Route exact path="/">
      <Home />

    </Route>
    <Route exact path="/departman">
      <Departman />

    </Route>
</ Routes>
    </div>
    </BrowserRouter> */