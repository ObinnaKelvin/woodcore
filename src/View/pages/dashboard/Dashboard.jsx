import React from 'react'
import './dashboard.scss';
import { DesktopNavbar } from '../../components/navigation/Navbar';
import { Handshake, MoveDownLeft, MoveUpRight, Pencil, TimerReset, Trash2, UserCheck, UserMinus, UserRoundCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "../../components/chart/revenueData.json";
import sourceData from "../../components/chart/sourceData.json";

function Dashboard() {
  return (
    <div className="dashboard-container">
        <DesktopNavbar/>

        <div className="dashboard-wrapper">
            <div className="dashboard-left">

                <div className="dashboard-left-header">
                    <h1>Hello, Kelvin!</h1>
                    <span>Dashboard</span>
                </div>

                <div className="dashboard-left-stats">
                    <div className="balance-card">
                        <div className="sub-text">
                            Your account balance
                        </div>
                        <div className="main-text">
                            ₦
                            <CountUp end={2000567.00} duration={2}/>
                        </div>
                    </div>
                    <div className="money-move-holder">
                        <div className="money-move">
                            <div className="left">
                                <MoveDownLeft />
                            </div>
                            <div className="right">
                                <span>Money In</span>
                                <span> ₦
                            <CountUp end={300000.00} duration={2}/></span>
                            </div>
                        </div>
                        <div className="money-move">
                            <div className="left out">
                                <MoveUpRight />
                            </div>
                            <div className="right">
                                <span>Money Out</span>
                                <span> ₦
                            <CountUp end={850000.00} duration={2}/></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dashboard-left-graph">
                    {/* <h1>Graphs</h1> */}
                        <Bar
                          data={{
                            // labels: sourceData.map((data) => data.label),.
                            labels: ['Dec', 'Jan', 'Feb'],
                            datasets: [
                              {
                                label: "Money In",
                                data:[750000,850000,500000],
                                // data: sourceData.map((data) => data.value),
                                // backgroundColor: [
                                //   "rgba(43, 63, 229, 0.8)",
                                //   "rgba(250, 192, 19, 0.8)",
                                //   "rgba(253, 135, 135, 0.8)",
                                // ],
                                borderRadius: 5,
                              },
                              {
                                label: "Money Out",
                                data:[920000,600000,990000],
                                // data: sourceData.map((data) => data.value),
                                // backgroundColor: [
                                //   "rgba(43, 63, 229, 0.8)",
                                //   "rgba(250, 192, 19, 0.8)",
                                //   "rgba(253, 135, 135, 0.8)",
                                // ],
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
                </div>

                <div className="dashboard-scheduled">
                    <div className="header-text">
                        Infographics
                    </div>

                    <div className="scheduled-holder">
                        <div className="schedule-item">
                            {/* <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div> */}
                            <div className="top"><UserCheck /></div>
                            <div className="mid"><CountUp end={1561} duration={2}/></div>
                            <div className="footer">Active Accounts</div>
                        </div>
                        <div className="schedule-item">
                            {/* <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div> */}
                            <div className="top"><UserRoundCog /></div>
                            <div className="mid"><CountUp end={267} duration={2}/></div>
                            <div className="footer">Suspended Accounts</div>
                        </div>
                        <div className="schedule-item">
                            {/* <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div> */}
                            <div className="top"><UserMinus /></div>
                            <div className="mid"><CountUp end={52} duration={2}/></div>
                            <div className="footer">Deactivated Accounts</div>
                        </div>
                        <div className="schedule-item">
                            {/* <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div> */}
                            <div className="top"><Handshake /></div>
                            <div className="mid"><CountUp end={8721} duration={2}/></div>
                            <div className="footer">Successful Transactions</div>
                        </div>
                        <div className="schedule-item">
                            {/* <div className="edit-icon"><Pencil size={17} /></div>
                            <div className="delete-icon"><Trash2 size={17} /></div> */}
                            <div className="top"><TimerReset /></div>
                            <div className="mid"><CountUp end={21} duration={2}/></div>
                            <div className="footer">Scheduled Transactions</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="dashboard-right">
                <div className="dashboard-transaction-activity">
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

export default Dashboard