import React from "react";
import { Routes ,Route, BrowserRouter} from "react-router-dom";
import Listing from "./pages/Listing.jsx";

import Booking from "./pages/Booking.jsx";
import Favrouite from "./pages/Favrouite.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header";
import Property from "./pages/Property";
import AddProperty from "./pages/AddProperty.jsx";




export default function App() {
  return (
   <>
   <div>
  <BrowserRouter>
    <Header/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/listing" element={<Listing/>}/>
     <Route path="/bookings" element={<Booking/>}/>
     <Route path="/Property" element={<Property/>}/>
     <Route path="/addproperty" element={<AddProperty/>}/>
     
     <Route path="/favourites" element={<Favrouite/>}/>
    </Routes>
  <Footer/>
  </BrowserRouter>
   </div>
   </>
    
    
  
  )
}