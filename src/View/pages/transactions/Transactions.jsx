import React from 'react'
import './transactions.scss';
import { DesktopNavbar } from '../../components/navigation/Navbar';
import { ArrowLeftRight, MoveDownLeft, MoveUpRight, Pencil, TimerReset, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "../../components/chart/revenueData.json";
import sourceData from "../../components/chart/sourceData.json";
// import TotalRevenue from '../../components/chart/Chart';

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
                    <div className="transactions-left-graph">
                        <Line
                            data={{
                                labels: revenueData.map((data) => data.label),
                                datasets: [
                                {
                                    label: "Revenue",
                                    data: revenueData.map((data) => data.revenue),
                                    backgroundColor: "#064FF0",
                                    borderColor: "#064FF0",
                                },
                                {
                                    label: "Cost",
                                    data: revenueData.map((data) => data.cost),
                                    backgroundColor: "#FF3030",
                                    borderColor: "#FF3030",
                                },
                                ],
                            }}
                            options={{
                                elements: {
                                    line: {
                                        tension: 0.5,
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
                    {/* <div className="transactions-left-graph">
                        <Bar
                          data={{
                            labels: sourceData.map((data) => data.label),
                            datasets: [
                              {
                                label: "Count",
                                data: sourceData.map((data) => data.value),
                                backgroundColor: [
                                  "rgba(43, 63, 229, 0.8)",
                                  "rgba(250, 192, 19, 0.8)",
                                  "rgba(253, 135, 135, 0.8)",
                                ],
                                borderRadius: 5,
                              },
                            ],
                          }}
                          options={{
                            plugins: {
                              title: {
                                text: "Revenue Source",
                              },
                            },
                          }}
                        />

                       
                    </div> */}
                    <Link to={'/transactions/transfer'} className='link'> 
                        <div className="action-card">
                            <div className="action-icon">
                                <ArrowLeftRight />
                            </div>
                            {/* <Link to={'/transactions/transfer'} className='link'>  */}
                                <div className="sub-text">
                                    Transfer
                                </div>
                            {/* </Link> */}
                        </div>
                    </Link>
                    <div className="action-card">
                        <div className="action-icon">
                            <TimerReset />
                        </div>
                        <div className="sub-text">
                            Scheduled Transfers
                        </div>
                    </div>
                    {/* <div className="action-card">
                        <div className="action-icon">
                            <ArrowLeftRight />
                        </div>
                        <div className="sub-text">
                            Transfer
                        </div>
                    </div> */}
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
            {/* <div className="transactions-right">
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
                
            </div> */}
        </div>
    </div>
  )
}

export default Transactions