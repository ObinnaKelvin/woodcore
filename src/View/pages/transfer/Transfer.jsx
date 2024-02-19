import React, { useState } from 'react'
import './transfer.scss';
import { DesktopNavbar, MobileNavbar } from '../../components/navigation/Navbar';
import { Handshake, Landmark, MoveDownLeft, MoveUpRight, Pencil, ReceiptText, Send, ServerCrash, TimerReset, Trash2, UserCheck, UserMinus, UserRoundCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import shot1 from '../../assets/image/headshot1.jpg'
import shot2 from '../../assets/image/headshot2.jpg'
import shot3 from '../../assets/image/headshot3.jpg'


const Transfer = () => {

    const [toWoodcore, setToWoodcore] = useState('')
    const [searchPatient, setSearchPatient] = useState('')
    const [showCustomer, setShowCustomer] = useState('')
    const [showForm, setShowForm] = useState('')
    const [amount, setAmount] = useState('')
    const customer = JSON.parse(localStorage.getItem('customer'));

    const handleToWoodCore = () => {
        setToWoodcore(1)
        // localStorage.setItem('')
    }

    const handleSearch = (e) => {
        // e.preventDefault()
        setShowCustomer(1)
        // localStorage.setItem('customer', JSON.stringify({
        //     "name": "Precious Okere",
        //     "account_no": "7011111111"
        // }))
        //console.log(1)
    }
    // const handleToBank = () => {
        
    // }
    // const handleWithdraw = () => {
        
    // }
  return (
    <div className="transfer-container">
        <DesktopNavbar/>
        <MobileNavbar />
        <div className="transfer-wrapper">
            <div className="transfer-left">

                <div className="transfer-left-header">
                    <h1>Hello, Kelvin!</h1>
                    <span>Transfer</span>
                </div>

                <div className="transfer-left-actions">

                    <div className={`transfer-left-actions-item ${toWoodcore === 1 && "active"}`} onClick={handleToWoodCore}>
                        <div className="icon">
                            <ServerCrash />
                        </div>
                        <div className="text">
                            To WoodCore
                        </div>
                    </div>
                    <div className="transfer-left-actions-item">
                        <div className="icon">
                            <Landmark />
                        </div>
                        <div className="text">
                            To Bank
                        </div>
                    </div>
                    <div className="transfer-left-actions-item">
                        <div className="icon">
                            <ReceiptText />
                        </div>
                        <div className="text">
                            Withdraw
                        </div>
                    </div>

                </div>

                {
                    toWoodcore === 1 &&

                    <div className="transfer-left-search">
                        <div className="text">Recipient Account</div>
                        <div className="search-box">
                            <input type="text" value={searchPatient} onChange={(e) => setSearchPatient(e.target.value)}/>
                            {/* <button onChange={handleSearch}>Search</button> */}
                            <div className='button' onClick={handleSearch}>Search</div>
                        </div>
                    </div>
                }

                {
                    showCustomer === 1 &&

                    <div className="transfer-left-search">
                        <div className="tab-list-item" onClick={() => setShowForm(1)}>
                            <div className="pic-box">
                                <img src={shot1} alt="" />
                            </div>
                            <div className="details">
                                <span>Precious Okere</span>
                                <span>7011111111</span>
                            </div>
                        </div>
                    </div>
                }

                {
                    showForm === 1 &&
                    <div className="transfer-left-search">
                        <div className="customer-form">
                            <section>
                                <span>Amount</span>
                                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                            </section>
                            <section>
                                <span>Remarks</span>
                                <textarea type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                            </section>
                            <button><span>Send</span><Send /></button>
                        </div>
                    </div>
                }

                {
                    toWoodcore === 1 &&
                    <div className="transfer-left-benefeciary">
                        <div className="text">Benefeciaries</div>
                        <div className="list-box">
                            <div className="tab-holder">
                                <div className="th-item recent">Recents</div>
                                <div className="th-item">Favourites</div>
                            </div>
                            <div className="tab-list">
                                <div className="tab-list-item">
                                    <div className="pic-box">
                                        <img src={shot1} alt="" />
                                    </div>
                                    <div className="details">
                                        <span>Precious Okere</span>
                                        <span>7011111111</span>
                                    </div>
                                </div>
                                <div className="tab-list-item">
                                    <div className="pic-box">
                                        <img src={shot2} alt="" />
                                    </div>
                                    <div className="details">
                                        <span>Victor Chima</span>
                                        <span>7011111112</span>
                                    </div>
                                </div>
                                <div className="tab-list-item">
                                    <div className="pic-box">
                                        <img src={shot3} alt="" />
                                    </div>
                                    <div className="details">
                                        <span>Kamaya Richards</span>
                                        <span>7011111113</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }       


            </div>
            <div className="transfer-right">
                
            </div>
        </div>
        
    </div>
  )
}

export default Transfer