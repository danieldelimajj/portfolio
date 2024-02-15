import {BrowserRouter, Routes, Route} from 
"react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";


function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/portfolio" element={ <Home />}></Route> 
            <Route path="/About" element={ <About />}></Route>
            <Route path="/Projects" element={ <Projects />}></Route>
            <Route path="/Contacts" element={ <Contacts />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes