import React from 'react'
import './transactions.scss';
import { DesktopNavbar } from '../../components/navigation/Navbar';
import { MoveDownLeft, MoveUpRight, Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transactions = () => {
  return (
    <div className="transactions-container">
        <DesktopNavbar/>

        <div className="transactions-wrapper">
            <div className="transactions-left">

                <div className="transactions-left-header">
                    <h1>Hello, Kelvin!</h1>
                    <span>Transactions</span>
                </div>

                <div className="transactions-left-stats">
                    <div className="balance-card">
                        <div className="sub-text">
                            Your account balance
                        </div>
                        <div className="main-text">
                            ₦ 2,000,567.00
                        </div>
                    </div>
                    <div className="money-move-holder">
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
                    </div>
                </div>

                <div className="transactions-left-graph">
                    <h1>Graphs</h1>
                </div>

                <div className="transactions-scheduled">
                    <div className="header-text">
                        Scheduled Transactions
                    </div>

                    <div className="scheduled-holder">
                        <div className="schedule-item">
                            <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div>
                            <div className="top">100001</div>
                            <div className="mid">Noah Darvich</div>
                            <div className="footer">18th Feb, 2024</div>
                        </div>
                        <div className="schedule-item">
                            <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div>
                            <div className="top">100002</div>
                            <div className="mid">Simon Akpan</div>
                            <div className="footer">18th Feb, 2024</div>
                        </div>
                        <div className="schedule-item">
                            <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div>
                            <div className="top">100003</div>
                            <div className="mid">Sodiq Bello</div>
                            <div className="footer">18th Feb, 2024</div>
                        </div>
                        <div className="schedule-item">
                            <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div>
                            <div className="top">100004</div>
                            <div className="mid">Sodiq Bello</div>
                            <div className="footer">18th Feb, 2024</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="transactions-right">
                <div className="transactions-transaction-activity">
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

export default Transactions