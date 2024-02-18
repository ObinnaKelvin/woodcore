import React from 'react'
import './accounts.scss';
import { DesktopNavbar } from '../../components/navigation/Navbar';
import { Handshake, MoveDownLeft, MoveUpRight, Pencil, TimerReset, Trash2, UserCheck, UserMinus, UserRoundCog } from 'lucide-react';
import { Link } from 'react-router-dom';

function Accounts() {
  return (
    <div className="accounts-container">
        <DesktopNavbar/>

        <div className="accounts-wrapper">
            <div className="accounts-left">

                <div className="accounts-left-header">
                    <h1>Hello, Kelvin!</h1>
                    <span>Accounts</span>
                </div>

                <div className="accounts-left-stats">
                    <div className="balance-card">
                        <div className="sub-text">
                            Checking Balance
                        </div>
                        <div className="main-text">
                            ₦ 2,000,567.00
                        </div>
                    </div>
                    <div className="balance-card">
                        <div className="sub-text">
                            Savings Balance
                        </div>
                        <div className="main-text">
                            ₦ 2,000,567.00
                        </div>
                    </div>
                    <div className="balance-card">
                        <div className="sub-text">
                            Credit Card Balance
                        </div>
                        <div className="main-text">
                            ₦ 2,000,567.00
                        </div>
                    </div>
                    {/* <div className="money-move-holder">
                        <div className="money-move">
                            <div className="left">
                                <MoveDownLeft />
                            </div>
                            <div className="right">
                                <span>Money In</span>
                                <span>₦ 300,000.00</span>
                            </div>
                        </div>
                        <div className="money-move">
                            <div className="left out">
                                <MoveUpRight />
                            </div>
                            <div className="right">
                                <span>Money Out</span>
                                <span>₦ 850,000.00</span>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* <div className="accounts-left-graph">
                    <h1>Graphs</h1>
                </div> */}

                <div className="accounts-scheduled">
                    <div className="header-text">
                        Infographics
                    </div>

                    <div className="scheduled-holder">
                        <div className="schedule-item">
                            {/* <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div> */}
                            <div className="top"><UserCheck /></div>
                            <div className="mid">1,561</div>
                            <div className="footer">Active Accounts</div>
                        </div>
                        <div className="schedule-item">
                            {/* <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div> */}
                            <div className="top"><UserRoundCog /></div>
                            <div className="mid">1,561</div>
                            <div className="footer">Suspended Accounts</div>
                        </div>
                        <div className="schedule-item">
                            {/* <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div> */}
                            <div className="top"><UserMinus /></div>
                            <div className="mid">1,781</div>
                            <div className="footer">Deactivated Accounts</div>
                        </div>
                        {/* <div className="schedule-item">
                            <div className="top"><Handshake /></div>
                            <div className="mid">20,000</div>
                            <div className="footer">Successful Transactions.</div>
                        </div>
                        <div className="schedule-item">
                            <div className="top"><TimerReset /></div>
                            <div className="mid">20,000</div>
                            <div className="footer">Scheduled Transactions.</div>
                        </div> */}
                    </div>
                </div>

            </div>
            <div className="accounts-right">
                <div className="accounts-transaction-activity">
                    <div className="header-text">
                        <h3>Recent Activities</h3>
                        <Link className='link' to={'/transactions'}><span>See more</span></Link>
                    </div>

                    <div className="transaction-holder">
                        <div className="transaction-item">
                            <div className="transaction-icon in"><MoveUpRight size={19} /></div>
                            <div className="transaction-details">
                                <div className="main-text">Chima Okere</div>
                                <div className="sub-text">18th Feb, 2024</div>
                            </div>
                            <div className="transaction-cost in">₦250,000</div>
                        </div>
                        <div className="transaction-item">
                            <div className="transaction-icon out"><MoveDownLeft size={19} /></div>
                            <div className="transaction-details">
                                <div className="main-text">Hakeem Lawal</div>
                                <div className="sub-text">18th Feb, 2024</div>
                            </div>
                            <div className="transaction-cost out">₦250,000</div>
                        </div>
                        <div className="transaction-item">
                            <div className="transaction-icon out"><MoveDownLeft size={19} /></div>
                            <div className="transaction-details">
                                <div className="main-text">Chima Okere</div>
                                <div className="sub-text">18th Feb, 2024</div>
                            </div>
                            <div className="transaction-cost out">₦250,000</div>
                        </div>
                        <div className="transaction-item">
                            <div className="transaction-icon in"><MoveUpRight size={19} /></div>
                            <div className="transaction-details">
                                <div className="main-text">Chima Okere</div>
                                <div className="sub-text">18th Feb, 2024</div>
                            </div>
                            <div className="transaction-cost in">₦250,000</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Accounts