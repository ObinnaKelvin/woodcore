import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './View/pages/dashboard/Dashboard';
import Transactions from "./View/pages/transactions/Transactions";
import Transfer from "./View/pages/transfer/Transfer";
import Accounts from "./View/pages/accounts/Accounts";
import Customers from "./View/pages/customers/Customers";
import {LoadingScreen} from "../src/View/components/loading/Loading";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function App() {
  const[isLoading, setIsLoading] = useState(true)
  // const navigate = useNavigate()

  return (
    <Router>
        <Routes>
          {/* <Route path='/' element={
            {if (isLoading){
              setTimeout(() => {
                setIsLoading(false)
                navigate("/dashboard"); //2. Then navigate to dashboard
              }, 5000)
            }}
          }/> */}
          
          <Route path='/' element={<Dashboard />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/transactions' element={<Transactions />}/>
          <Route path='/transactions/transfer' element={<Transfer />}/>
          <Route path='/transactions/schedule-transfer' element={<Transactions />}/>
          <Route path='/transfer' element={<Transfer />}/>
          <Route path='/accounts' element={<Accounts />}/>
          <Route path='/customers' element={<Customers />}/>
          <Route path='/welcome' element={<LoadingScreen />}/>
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
