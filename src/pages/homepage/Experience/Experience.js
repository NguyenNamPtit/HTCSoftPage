import React from 'react';
import './Experience.css';
const Experience = () => {
    return (
        <div className='experience'>
            <div className='experience-title-content'>
                <h1 className='title'>What we’ve achieved</h1>
                <p className='content'>Aenean tincidunt libero eget mi pulvinar fermentum. Aliquam condimentum eros a purus molestie egestas eu vel leo.</p>
            </div>
            <div className='experience-item'>
                <div className='experience-content-item'>
                    <div className='list-items'>
                        <div className='list'>
                            <div className='experience-plus'>
                                <p>6+</p>
                            </div>
                            <div className='experience-item-detail'>
                                <p>Years of experience</p>
                            </div>
                        </div>
                        <div className='list'>
                            <div className='experience-plus'>
                                <p>10</p>
                            </div>
                            <div className='experience-item-detail'>
                                <p>Free and paid extensions</p>
                            </div>
                        </div>
                        <div className='list'>
                            <div className='experience-plus'>
                                <p>68</p>
                            </div>
                            <div className='experience-item-detail'>
                                <p>Successful projects</p>
                            </div>
                        </div>
                        <div className='list'>
                            <div className='experience-plus'>
                                <p>200+</p>
                            </div>
                            <div className='experience-item-detail'>
                                <p>Clients worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
