import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import B2b from './pages/B2b';
import India from './pages/India';
import World from './pages/World';
import VisaServices from './pages/VisaServices';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy Policy';
import TermsAndConditions from './pages/Terms and Conditions';
import CancellationPolicy from './pages/Cancellation Policy';
import ShippingDeliveryPolicy from './pages/Shipping Delivery Policy';
import Faq from './pages/Faq';
import MadhyaPradesh from './pages/india/MadhyaPradesh';
import UttarPradesh from './pages/india/UttarPradesh';
import Rajasthan from './pages/india/Rajasthan';
import Gujarat from './pages/india/Gujarat';
import Daman from './pages/india/Daman';
import Maharashtra from './pages/india/Maharashtra';
import HimachalPradesh from './pages/india/HimachalPradesh';
import JammuKashmir from './pages/india/Jammu';
import Ladakh from './pages/india/Ladakh';
import Uttarakhand from './pages/india/Uttarakhand';
import Goa from './pages/india/Goa';
import Kerala from './pages/india/Kerala';
import Karnataka from './pages/india/Karnataka';
import TamilNadu from './pages/india/TamilNadu';
import AndhraPradesh from './pages/india/AndhraPradesh';
import AndmanNicobar from './pages/india/Andman';
import Dubai from './pages/international/Dubai' ;
import Indonesia from './pages/international/Indonesia';
import Malaysia from './pages/international/Malaysia';
import Singapore from './pages/international/Singapore';
import Srilanka from './pages/international/Srilanka';
import Thailand from './pages/international/Thailand';
import Event from './pages/Events';

function App() {
    return (
        <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/b2b" element={<B2b />} />
          <Route path="/india" element={<India />} />
          <Route path="/world" element={<World />} />
          <Route path="/event" element={<Event />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/shipping-delivery-policy" element={<ShippingDeliveryPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/india/madhya-pradesh" element={<MadhyaPradesh />} />
          <Route path="/india/uttar-pradesh" element={<UttarPradesh />} />
          <Route path="/india/rajasthan" element={<Rajasthan />} />
          <Route path="/india/gujarat" element={<Gujarat />} />
          <Route path="/india/daman" element={<Daman />} />
          <Route path="/india/maharashtra" element={<Maharashtra />} />
          <Route path="/india/himachal-pradesh" element={<HimachalPradesh />} />
          <Route path="/india/jammu-kashmir" element={<JammuKashmir />} />
          <Route path="/india/ladakh" element={<Ladakh />} />
          <Route path="/india/uttarakhand" element={<Uttarakhand />} />
          <Route path="/india/goa" element={<Goa />} />
          <Route path="/india/kerala" element={<Kerala />} />
          <Route path="/india/karnataka" element={<Karnataka />} />
          <Route path="/india/tamil-nadu" element={<TamilNadu />} />
          <Route path="/india/andhra-pradesh" element={<AndhraPradesh />} />
          <Route path="/india/andman-nicobar" element={<AndmanNicobar />} />
          <Route path="/international/dubai" element ={<Dubai />} />
          <Route path="/international/indonesia" element ={<Indonesia />} />
          <Route path="/international/malaysia" element ={<Malaysia />} />
          <Route path="/international/singapore" element ={<Singapore />} />
          <Route path="/international/srilanka" element ={<Srilanka />} />
          <Route path="/international/thailand" element ={<Thailand />} />
        </Routes>
      <Footer />
    </Router>
    );
}

export default App;
