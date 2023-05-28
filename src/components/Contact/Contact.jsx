import React from 'react';
import'./Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import{HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = ()=> {

    return(

        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/*right side */}

                <div className="c-right">
                    <div className="image-container">
                    <img src="./contact.jpg" alt=""/>

                    </div>


                </div>

                {/* left side */}
                <div className="flexColStart c-left">
                    <span className = "orangeText">Our Contact</span>
                    <span className="primaryText">Easy to Contact us </span>
                    <span className = "secondaryText">We are always ready to help by providing he best service</span>
                
                    <div className="flexStart contactModes">
                        {/* firstrow */}
                           <div className="flexColStart row mode">
                            <div className=" flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size ={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className = "primaryText">Call</span>
                                    <span className = "secondaryText">021 123 145 14 </span>

                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>

                        {/* second mode */}
                        <div className="flexColStart row mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size ={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className = "primaryText">Chat</span>
                                    <span className = "secondaryText">021 123 145 14 </span>

                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat
                            </div>
                        </div>
                    </div>
                    {/* second row */}

                    <div className="flexStart row">
                        {/* 3rd mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size ={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className = "primaryText">Video Call </span>
                                    <span className = "secondaryText">021 123 145 14 </span>

                                </div>
                            </div>
                            <div className="flexCenter button">
                                Video Call Now
                            </div>
                        </div>

                        {/* fourth mode */}
                        <div className="flexColStart row mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size ={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className = "primaryText">Message</span>
                                    <span className = "secondaryText">021 123 145 14 </span>

                                </div>
                            </div>
                            <div className="flexCenter button">
                                Message
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )



}
export default Contact