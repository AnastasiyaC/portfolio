import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import ProjectsPage from "./components/pages/projectsPage/ProjectsPage";
import AboutPage from "./components/pages/aboutPage/AboutPage";
import ContactsPage from "./components/pages/contactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <main className='Main'>
            <Routes>
                <Route exact path='/' element={ <AboutPage/> }/>
                <Route path='/projects' element={ <ProjectsPage/> }/>
                <Route path='/contacts' element={ <ContactsPage/> }/>
            </Routes>
        </main>
    </div>
  );
}

export default App;
