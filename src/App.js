import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Support from "./pages/Support";
import Home from "./components/Home";
import ContactUs from "./pages/ContactUs";
import Card1 from "./components/Card1";
import Carousel1 from "./components/Carousel1";
import AddUsers from "./pages/AddUsers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProducts from "./pages/AddProduct";
import AllProducts from "./pages/AllProducts";
import UpdateProducts from "./pages/UpdateProduct";
import AllUsers from "./pages/AllUser";
import UpdateUsers from "./pages/UpdateUser";


function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route exact path="/card" element={<Card1/>}/>
        <Route exact path="/about-us" element={<AboutUs/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/events" element={<Events/>}/>
        <Route exact path="/contact-us" element={<ContactUs/>}/>
        <Route exact path="/support" element={<Support/>}/>
        <Route exact path="/carousel1" element={<Carousel1/>}/>
        <Route exact path="/add-user" element={<AddUsers/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/add-product" element={<AddProducts/>}/>
        <Route exact path="/view-product" element={<AllProducts/>}/>
        <Route exact path="/update-product" element={<UpdateProducts/>}/>
        <Route exact path="/view-user" element={<AllUsers/>}/>
        <Route exact path="/update-user" element={<UpdateUsers/>}/>
        </Routes>
    </Router>
  );
}
  
export default App;




// import logo from './logo.svg';
// import './App.css';
// import Sidebar from './Components/Sidebar';
// import { Link, Routes,} from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import { BrowserRouter as Router,  Route } from 'react-router-dom';
// import Home from './Components/Home';

// function App() {
//   return (
//    <div className='App'>
//       <div className='row'>
//             <div className='col-4 col-md-4'><Sidebar/></div>
//             <div className='col-8 col-md-8'>
//               <Router>
//                 <Routes>
//                   <Route exact path='/' element={<Home/>} />
//                   {/* <Route exact path='/add-course' element={<AddCourse/>} />
//                   <Route exact path='/view-courses' element={<AllCourses/>}/>
//                   <Route exact path='/about' element={<About/>}/>
//                   <Route exact path='/update-course' element={<UpdateCourse/>}/> */}
      
//                 </Routes>
//                 </Router>
//             </div>
//           </div>
//      {/* <Sidebar/> */}
//    </div>

//   );
// }

// export default App;
