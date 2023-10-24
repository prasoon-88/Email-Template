import React, { useEffect, useState } from 'react';
import '../style/Header.css';
import { useSpring, animated } from '@react-spring/web'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    const style = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
    })


    return (
        <div className='header'>
            <div className="header-main">
                <p>Marketplace</p>
                <animated.div style={style} className="heading">
                    <TypeAnimation className="heading1"
                        sequence={[
                            'Email Templates',
                            1500, 
                            'Email Sequences',
                            1500,
                            'Marketing Recipes',
                            1500,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        cursor={true}
                    />
                    <h1 className="heading2">by the community, for the community.</h1>
                </animated.div>
                <h3>100s of free templates to help you craft the perfect marketing journey.</h3>
            </div>
        </div>
    )
}

export default Header