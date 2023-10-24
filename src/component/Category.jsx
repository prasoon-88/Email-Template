import React from 'react'
import { Mycontext } from '../App';
import { useContext } from 'react';
import { useSpring, animated } from '@react-spring/web'

const Category = () => {
    const { setCategory, category } = useContext(Mycontext);
    
    const style = useSpring({
        from: { y: 200, opacity: 0 },
        to: { y: 0, opacity: 1 },
      })

    const setCat = (val)=>{
        if (!category.includes(val)) {
            setCategory([...category,val])
        } else {
            let arr = [];
            category.forEach((item) => {
                if (item !== val) {
                    arr.push(item);
                }
            })
            setCategory(arr)
        }
    }
    return (
        <animated.div style={style} className="category-main">
            <h3>Categories</h3>
            <ul className="category-container">
                <li>
                    <input type="checkbox" onClick={() => {
                       setCat('Announcement')
                    }} />
                    <h2>Announcement</h2>
                </li>
                <li>
                    <input type="checkbox" onClick={(e) => {
                        setCat('Educate & Inform')
                    }} />
                    <h2>Educate & Inform </h2>
                </li>
                <li>
                    <input type="checkbox" onClick={(e) => {
                        setCat('Invitations')
                    }} />
                    <h2>Invitation</h2>
                </li>
                <li>
                    <input type="checkbox" onClick={(e) => {
                        setCat('Ocassions')
                    }} />
                    <h2>Ocassions</h2>
                </li>
            </ul>
        </animated.div>
    )
}

export default Category