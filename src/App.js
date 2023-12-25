import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import LoginForm from "./home";
import Logo from './coffeelogo.png'






function MyFooter() {
    return (

        <footer className={"container mx-auto p-4 bg-orange-800"}>
            <p>Coffeemania</p>
        </footer>

    )
}


function CatalogPage() {
    return (
        <div className={"flex flex-col min-h-screen"}>
            <h1>This is Catalog page</h1>
        </div>

    )
}

function HomePage() {
    return (
        <div className={"flex flex-col min-h-screen"}>
            <h1>This is Home Page</h1>
        </div>

    )
}


function App() {
  return (
      <div className="App">

          <BrowserRouter basename={"/"}>
              <header className={"container flex justify-center space-x-4 mx-auto bg-orange-800"}>
                  <Link className={"w-16 h-16 flex justify-center items-center overflow-hidden rounded-full"} to={"/"}>
                      <img src={Logo} className={"object-cover w-full h-full"} />
                  </Link>
                  <Link className={"bg-orange-100 text-slate-500 p-3 text-orange-800 "} to="/sign-in">
                      Login
                  </Link>
                  <Link className={"bg-orange-100 text-slate-500 p-3 text-orange-800"} to={"/catalog"}>
                      Catalog
                  </Link>
              </header>

                  <Routes>
                      <Route path="/sign-in" element={< LoginForm name={"Vlad"}/>}/>
                      <Route path="/" element={< HomePage/>}/>
                      <Route path="/catalog" element={< CatalogPage/>}/>
                  </Routes>
          </BrowserRouter>


          < MyFooter/>
      </div>

);
}

export default App;
