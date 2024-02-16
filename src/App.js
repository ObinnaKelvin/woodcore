import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './View/pages/dashboard/Dashboard';
import Transactions from "./View/pages/transactions/Transactions";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/transactions' element={<Transactions />}/>
          {/* <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/contact-us' element={<Contact />}/>
          <Route path='/book-appointment' element={<Booking />}/>
          <Route path='/patient-login' element={<Plogin />}/>
          <Route path='/staff-login' element={<Slogin />}/>
          <Route path='/pay-later' element={<PayLater />}/>
          <Route path='/pay-now' element={<PayNow />}/>
          <Route path='/patient-portal' element={<Pportal />}/>
          <Route path='/patient-portal/profile' element={<PUProfile />}/>
          <Route path='/portal/auth/:userId' element={<AuthOTP />}/>
          <Route path='/staff-portal' element={<Sportal />}/>
          <Route path='/staff-portal/create-appointment' element={<Sappointment />}/>
          <Route path='/staff-portal/patient' element={<Patient />}/> */}
        </Routes>
    </Router>
  );
}

export default App;
