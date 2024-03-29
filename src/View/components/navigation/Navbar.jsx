import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {LayoutDashboard, HandCoins, Wallet2, Users} from 'lucide-react';
import './navbar.scss'


export const DesktopNavbar = () => {


    return (
        <div className="desktopnavbar-container">
            <div className="desktopnavbar-wrapper">
                <div className="logo">
                    <svg width="100" height="22" viewBox="0 0 157 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.9039 17.7006L37.7539 4.3894H41.0039L43.1284 14.5616L45.4539 4.3894H49.5284L51.8539 14.5863L53.9539 4.3894H57.2284L54.0539 17.7006H49.7294L47.5039 7.22792L45.2539 17.7006H40.9039Z" fill="#FFFFFF"/>
                        <path d="M64.7531 17.9015C62.8861 17.9015 61.2861 17.2239 59.9531 15.8676C58.6192 14.5114 57.9531 12.8955 57.9531 11.0208C57.9531 9.12912 58.6192 7.5132 59.9531 6.17403C61.2861 4.83485 62.8861 4.16479 64.7531 4.16479C66.6362 4.16479 68.2446 4.83865 69.5786 6.18635C70.9116 7.53405 71.5786 9.14618 71.5786 11.0208C71.5786 12.9135 70.9116 14.5332 69.5786 15.8809C68.2446 17.2277 66.6362 17.9015 64.7531 17.9015ZM64.7531 14.9133C65.8192 14.9133 66.7192 14.5323 67.4531 13.7703C68.1862 13.0083 68.5531 12.0918 68.5531 11.0199C68.5531 9.94892 68.1862 9.0315 67.4531 8.26951C66.7192 7.50752 65.8192 7.12652 64.7531 7.12652C63.7031 7.12652 62.8116 7.50752 62.0786 8.26951C61.3446 9.0315 60.9786 9.94798 60.9786 11.0199C60.9786 12.0918 61.3446 13.0083 62.0786 13.7703C62.8116 14.5323 63.7031 14.9133 64.7531 14.9133Z" fill="#FFFFFF"/>
                        <path d="M79.8312 17.9015C77.9643 17.9015 76.3643 17.2239 75.0312 15.8676C73.6973 14.5114 73.0312 12.8955 73.0312 11.0208C73.0312 9.12912 73.6973 7.5132 75.0312 6.17403C76.3643 4.83485 77.9643 4.16479 79.8312 4.16479C81.7143 4.16479 83.3228 4.83865 84.6567 6.18635C85.9897 7.53405 86.6567 9.14618 86.6567 11.0208C86.6567 12.9135 85.9897 14.5332 84.6567 15.8809C83.3228 17.2277 81.7143 17.9015 79.8312 17.9015ZM79.8312 14.9133C80.8973 14.9133 81.7973 14.5323 82.5312 13.7703C83.2643 13.0083 83.6312 12.0918 83.6312 11.0199C83.6312 9.94892 83.2643 9.0315 82.5312 8.26951C81.7973 7.50752 80.8973 7.12652 79.8312 7.12652C78.7812 7.12652 77.8897 7.50752 77.1567 8.26951C76.4228 9.0315 76.0567 9.94798 76.0567 11.0199C76.0567 12.0918 76.4228 13.0083 77.1567 13.7703C77.8888 14.5323 78.7812 14.9133 79.8312 14.9133Z" fill="#FFFFFF"/>
                        <path d="M94.7278 17.9016C92.9278 17.9016 91.3816 17.224 90.0901 15.8677C88.7986 14.5115 88.1523 12.9041 88.1523 11.0456C88.1523 9.12067 88.7939 7.49149 90.0778 6.16084C91.3608 4.8302 92.9108 4.16393 94.7278 4.16393C96.3439 4.16393 97.6693 4.725 98.7024 5.84714V0.119873H101.952V17.7007H98.7024V16.2696C97.6524 17.3585 96.3278 17.9016 94.7278 17.9016ZM95.0523 14.938C96.1023 14.938 97.0108 14.5532 97.7778 13.7827C98.5439 13.0131 98.9278 12.0995 98.9278 11.0456C98.9278 9.99071 98.5439 9.07423 97.7778 8.29518C97.0108 7.51708 96.1023 7.12755 95.0523 7.12755C93.9684 7.12755 93.0561 7.51328 92.3146 8.28286C91.5731 9.05338 91.2024 9.9746 91.2024 11.0456C91.2024 12.1175 91.5731 13.0339 92.3146 13.7959C93.0561 14.5579 93.9693 14.938 95.0523 14.938Z" fill="#FFFFFF"/>
                        <path d="M111.052 17.9015C109.152 17.9015 107.54 17.2276 106.214 15.8799C104.89 14.5322 104.227 12.921 104.227 11.0454C104.227 9.12056 104.897 7.49138 106.239 6.16073C107.58 4.83009 109.184 4.16382 111.051 4.16382C112.467 4.16382 113.739 4.56567 114.863 5.36936C115.988 6.17305 116.801 7.21937 117.301 8.50831L114.326 9.33665C114.026 8.66754 113.588 8.12732 113.013 7.71694C112.439 7.30656 111.784 7.10185 111.051 7.10185C110.001 7.10185 109.11 7.49138 108.377 8.26948C107.643 9.04759 107.277 9.97354 107.277 11.0445C107.277 12.1164 107.643 13.0376 108.377 13.8072C109.11 14.5777 110.001 14.9625 111.051 14.9625C111.801 14.9625 112.463 14.7578 113.039 14.3474C113.614 13.937 114.043 13.3978 114.327 12.7277L117.302 13.5816C116.802 14.8715 115.99 15.9131 114.864 16.7083C113.74 17.5044 112.468 17.9015 111.052 17.9015Z" fill="#FFFFFF"/>
                        <path d="M125.605 17.9015C123.738 17.9015 122.138 17.2239 120.805 15.8676C119.471 14.5114 118.805 12.8955 118.805 11.0208C118.805 9.12912 119.471 7.5132 120.805 6.17403C122.138 4.83485 123.738 4.16479 125.605 4.16479C127.488 4.16479 129.096 4.83865 130.43 6.18635C131.763 7.53405 132.43 9.14618 132.43 11.0208C132.43 12.9135 131.763 14.5332 130.43 15.8809C129.095 17.2277 127.488 17.9015 125.605 17.9015ZM125.605 14.9133C126.671 14.9133 127.571 14.5323 128.305 13.7703C129.038 13.0083 129.405 12.0918 129.405 11.0199C129.405 9.94892 129.038 9.0315 128.305 8.26951C127.571 7.50752 126.671 7.12652 125.605 7.12652C124.555 7.12652 123.663 7.50752 122.93 8.26951C122.196 9.0315 121.83 9.94798 121.83 11.0199C121.83 12.0918 122.196 13.0083 122.93 13.7703C123.662 14.5323 124.555 14.9133 125.605 14.9133Z" fill="#FFFFFF"/>
                        <path d="M134.305 17.7006V4.38945H137.555V6.37404C137.988 5.62058 138.621 5.04719 139.455 4.65387C140.288 4.26056 141.305 4.1563 142.505 4.34017V7.83169C141.255 7.41373 140.117 7.50471 139.092 8.10748C138.068 8.71025 137.555 9.64853 137.555 10.9204V17.7016H134.305V17.7006Z" fill="#FFFFFF"/>
                        <path d="M150.079 17.9015C148.179 17.9015 146.567 17.2276 145.242 15.8799C143.917 14.5322 143.254 12.921 143.254 11.0454C143.254 9.12056 143.925 7.49138 145.266 6.16073C146.608 4.83009 148.211 4.16382 150.078 4.16382C151.711 4.16382 153.158 4.69551 154.416 5.75889C155.675 6.82226 156.454 8.14912 156.754 9.73945C156.954 10.6275 156.962 11.4644 156.779 12.251H146.479C146.662 13.122 147.079 13.7996 147.729 14.2849C148.379 14.7711 149.162 15.0137 150.079 15.0137C151.462 15.0137 152.595 14.5531 153.479 13.6328L156.329 14.4109C155.812 15.4658 154.959 16.3112 153.767 16.9471C152.576 17.584 151.345 17.9015 150.079 17.9015ZM146.479 9.76408H153.605C153.421 8.99451 153.013 8.34909 152.379 7.83067C151.745 7.31225 150.971 7.05162 150.055 7.05162C149.138 7.05162 148.359 7.3113 147.717 7.83067C147.075 8.35004 146.662 8.99451 146.479 9.76408Z" fill="#FFFFFF"/>
                        <path d="M10.9917 12.4131H5.54079L12.6153 0.101807H7.16437L5.54079 2.928H0.0898438L5.54079 12.4131L10.9917 21.8982L16.4427 12.4131L21.8936 21.8982L34.42 0.101807H28.9681L21.8936 12.4131H16.4427L23.5181 0.101807H18.0663L10.9917 12.4131Z" fill="#FFFFFF"/>
                    </svg>
                </div>
                <div className="step1">
                    <Link to={'/dashboard'} className='link'>
                        <div className='desktopnavbar-item'>
                            <LayoutDashboard  size={20}/>
                            <span>Dashboard</span>
                        </div>
                    </Link>
                    {/* <Link to={'/transfer'} className='link'>
                        <div className='desktopnavbar-item'>
                            <ArrowLeftRight  size={20}/>
                            <span>Transfer</span>
                        </div>
                    </Link> */}
                    <Link to={'/accounts'} className='link'>
                        <div className='desktopnavbar-item'>
                            <HandCoins  size={20}/>
                            <span>Accounts</span>
                        </div>
                    </Link>
                    <Link to={'/transactions'} className='link'>
                        <div className='desktopnavbar-item'>
                            <Wallet2  size={20}/>
                            <span>Transactions</span>
                        </div>
                    </Link>
                    <Link to={'/customers'} className='link'>
                        <div className='desktopnavbar-item'>
                            <Users  size={20}/>
                            <span>Customers</span>
                        </div>
                    </Link>
                </div>
                <div className="step2">
                    {/* <Link to={'/patient-login'} className='link'>
                        <div className='desktopnavbar-item'>
                            <LogOut size={20} />
                            <span>Log Out</span>
                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export const MobileNavbar = () => {


    return (
        <div className="navbarmobile-container">
            <div className="navbarmobile-wrapper">
                <div className="step1">
                    <Link to={'/dashboard'} className='link'>
                        <div className='navbarmobile-item'>
                        <LayoutDashboard  size={20}/>
                            <span>Dashboard</span>
                        </div>
                    </Link>
                    <Link to={'/accounts'} className='link'>
                        <div className='navbarmobile-item'>
                        <HandCoins  size={20}/>
                            <span>Accounts</span>
                        </div>
                    </Link>
                    <Link to={'/transactions'} className='link'>
                        <div className='navbarmobile-item'>
                            <Wallet2  size={20}/>
                            <span>Transactions</span>
                        </div>
                    </Link>
                    <Link to={'/customers'} className='link'>
                        <div className='navbarmobile-item'>
                            <Wallet2  size={20}/>
                            <span>Customers</span>
                        </div>
                    </Link>
                </div>
                {/* <div className="step2">
                    <Link to={'/patient-login'} className='link'>
                        <div className='navbarmobile-item' onClick={handleLogout}>
                            <LogOut size={20} />
                            <span>Log Out</span>
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}