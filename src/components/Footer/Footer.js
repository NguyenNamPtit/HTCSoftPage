import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
//import icon
import fbicon from '../../assets/images/[Icon] facebook-box-line.svg'
import igicon from '../../assets/images/[Icon] linkedin-box-line.svg'
import toast from 'react-hot-toast';        
const Footer = () => {
    const [email, setEmail] = useState('');
    const emailInputRef = useRef(null);

    const handleOnchange = (e) => {
        setEmail(e.target.value);
    };

    const handleEmail = async (e) => {
        e.preventDefault();

        const check = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (email === "") {
            toast.error("Email is required!");
        } else if (!check) {
            toast.error("Email is invalid!");
        } else {
            try {
                const response = await fetch('http://localhost:3001/email/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });

                if (!response.ok) {
                    const data = await response.json();
                    toast.error(data.message);
                } else {
                    setEmail("");
                    if (emailInputRef.current) {
                        emailInputRef.current.focus();
                    }
                    toast.success("Subscribe success!");
                }
            } catch (error) {
                console.log(error);
                toast.error("Failed to subscribe!");
            }
        }
    };
    return (
        <div className='footer-main'>
            <div style={{ width: '100 %' }}>
                <div className='newsletter'>
                    <div className='title-newsletter'>
                        <h1>Book a demo</h1>
                    </div>
                    <div className='field-newsletter'>
                        <div>
                            <label htmlFor="">
                                <input name='email' type='email' placeholder='Your email' value={email} onChange={handleOnchange} ref={emailInputRef} />
                            </label>
                            <div className='subscribe-icon'>
                                <div className='action-subscribe-primary' onClick={handleEmail}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M1.94602 9.31504C1.42402 9.14104 1.41902 8.86004 1.95602 8.68104L21.043 2.31904C21.572 2.14304 21.875 2.43904 21.727 2.95704L16.273 22.043C16.123 22.572 15.818 22.59 15.594 22.088L12 14L18 6.00004L10 12L1.94602 9.31504Z" fill="#424242" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <div className='site-map'>
                    <div className='site-map-content'>
                        <div className='logo-footer'>
                            <div className='logo-footer-box'>
                                <img src='https://www.htcestore.com/media/logo/websites/default/_Cell_Logo.png' alt='logo' />
                                <div className='icon-footer'>
                                    <div className='button-icon-footer'>

                                        <img src={fbicon} alt='logo' />
                                    </div>
                                    <div className='button-icon-footer'>
                                        <img src={igicon} alt='logo' />
                                    </div>
                                </div>
                            </div>
                            <h2>We provide the best service and outstanding products for your equirement</h2>
                        </div>
                        <div className='footer-menu'>
                            <ul className='footer-menu-left'>
                                <li>
                                    <Link to=''>HOME</Link>
                                </li>
                                <li>
                                    <Link to=''>PRODUCTS</Link>
                                </li>
                            </ul>
                            <ul className='footer-menu-center'>
                                <li>
                                    <Link to=''>ABOUT US</Link>
                                </li>
                                <li>
                                    <Link to=''>SERVICES</Link>
                                </li>
                            </ul>
                            <ul className='footer-menu-right'>
                                <li>
                                    <Link to=''>TERM AND CONDITIONS</Link>
                                </li>
                                <li>
                                    <Link to=''>PRIVACY POLICY</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h1>© 2022 HTCMage. All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;


