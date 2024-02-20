import React from 'react'
import { DesktopNavbar, MobileNavbar } from '../../components/navigation/Navbar'
import { ArrowLeftRight, MoveDownLeft, MoveUpRight, Pencil, TimerReset, Trash2, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "../../components/chart/revenueData.json";
import userData from "../../components/chart/users.json";
import { customers } from "../../components/data/customers"
import './customers.scss';

function Customers() {
  return (
    <div className='customers-container'>
        <DesktopNavbar />
        <MobileNavbar />
        <div className="customers-wrapper">
            <div className="customers-left">

                <div className="customers-left-header">
                    <h1>Hello, Kelvin!</h1>
                    <span>Customers</span>
                </div>

                <div className="customers-left-stats">
                    <div className="customers-left-graph">
                        <Line
                            data={{
                                labels: userData.map((data) => data.label),
                                datasets: [
                                {
                                    label: "Customer registrations per month",
                                    data: userData.map((data) => data.stats),
                                    backgroundColor: "#FFD700",
                                    borderColor: "#FFD700",
                                }
                                ],
                            }}
                            options={{
                                elements: {
                                    line: {
                                        tension: 0.1,
                                    },
                                },
                                plugins: {
                                title: {
                                    text: "Monthly Revenue & Cost",
                                },
                                },
                            }}
                        />

                       
                    </div>
                    {/* <div className="action-card">
                        <div className="action-icon">
                            <TimerReset />
                        </div>
                        <div className="sub-text">
                            Scheduled Transfers
                        </div>
                    </div> */}
                </div>

                <div className="accounts-transaction-activity">
                    <div className="header-text">
                        <h3>Customer Pool</h3>
                        <input type='text' placeholder='Search customer name...' role='search-input'/>
                        {/* <Link className='link' to={'/customers'}><span>See more</span></Link> */}
                    </div>

                    <div className="customers-holder">

                        {
                            customers.map((item, id) => {
                                return (
                                    <div className="customers-item" key={item.id}>
                                        <div className="edit-icon"><Pencil size={17} /></div>
                                        <div className="delete-icon"><Trash2 size={17} /></div>
                                        <div className="customers-info-wrapper">
                                            <div className={`customers-icon`}><UserRound /></div>
                                            <div className="customers-details">
                                                <div className="main-text">{item.first_name} {item.last_name}</div>
                                                <div className="sub-text">{item.account_no}</div>
                                            </div>

                                        </div>
                                        <div className={`customers-cost `}>{item.account_balance}</div>
                                    </div>
                                )

                            })
                        }
                        
                    </div>
                </div>


            </div>
            {/* <div className="customers-right">
                <div className="customers-transaction-activity">
                    <div className="header-text">
                        <h3>Recent Activities</h3>
                        <Link className='link' to={'/customers'}><span>See more</span></Link>
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
                
            </div> */}
        </div>
        
    </div>
  )
}

export default Customers