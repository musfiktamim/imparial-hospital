import {BrowserRouter,Route,Routes as Switch} from "react-router-dom"
import Nav from './layout/Nav';
import Home from "./pages/Home"

import Contact from "./pages/Contact";
import Doctorabout from "./pages/Doctorabout";
import Doctor from "./pages/Doctor";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";
import DeshHome from "./deshboard/DeshHome";
import DeshNav from "./deshboard/layout/DeshNav";
import Protector from "./protection/Protector";
import SignLog from "./deshboard/SignLog";
import AddDoctor from "./deshboard/AddDoctor";
import Editdoctor from "./deshboard/Editdoctor";


function App() {

  
  return (
        <BrowserRouter future={{v7_relativeSplatPath:true}}>
          <Nav />
          <Switch>
            
            <Route loader lazy={true} path='/' element={<Home />} />
            <Route loader lazy={true} path="/contact" element={<Contact />} />
            <Route loader lazy={true} path="/doctorabout/:name" element={<Doctorabout />} />
            <Route loader lazy={true} path="/doctor" element={<Doctor />} />
            <Route loader lazy={true} path="/reviews" element={<Reviews />} />
            <Route loader lazy={true} path="/services" element={<Services />} />
            <Route loader lazy={true} path="/deshboard" element={<SignLog />} />
            <Route path="/deshboard" shouldRevalidate={true} element={
              <Protector>
                <DeshNav />
              </Protector>
              }>
              <Route path="showcase"  element={<DeshHome />}/>
              <Route path="adddoctor"  element={<AddDoctor />}/>
              <Route path="editdoctor"  element={<Editdoctor />}/>
            </Route>
          </Switch>
        </BrowserRouter>
  )
}

export default App
