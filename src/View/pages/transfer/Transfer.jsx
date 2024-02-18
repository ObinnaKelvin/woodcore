import React, { useState } from 'react'
import './transfer.scss';
import { DesktopNavbar } from '../../components/navigation/Navbar';
import { Handshake, Landmark, MoveDownLeft, MoveUpRight, Pencil, ReceiptText, ServerCrash, TimerReset, Trash2, UserCheck, UserMinus, UserRoundCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import shot1 from '../../assets/image/headshot1.jpg'
import shot2 from '../../assets/image/headshot2.jpg'
import shot3 from '../../assets/image/headshot3.jpg'


const Transfer = () => {

    const [toWoodcore, setToWoodcore] = useState('')

    const handleToWoodCore = () => {
        setToWoodcore(1)
        // localStorage.setItem('')
    }
    // const handleToBank = () => {
        
    // }
    // const handleWithdraw = () => {
        
    // }
  return (
    <div className="transfer-container">
        <DesktopNavbar/>
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
                            <input type="text" />
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