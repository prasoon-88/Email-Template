import React from 'react';
import {Mycontext} from '../App'
import { useContext } from 'react';
import { useSpring, animated } from '@react-spring/web'

const Searchbar = () => {
    const {setSearch,setSort} = useContext(Mycontext);
    const style = useSpring({
        from: { y: -200, opacity: 0 },
        to: { y: 0, opacity: 1 },
      })

    return (
        <animated.div style={style} className="container-header">
            <div className="searchbar">
                <div className="searchIcon">
                    <i className="ri-search-line"></i>
                </div>
                <input type="text" id='searchInput' placeholder='Search email templates' onInput={(e)=>{
                        setSearch(e.target.value)
                }}/>
            </div>
            <div className="sorting">
                <img src="/assets/Vector.png" alt="" />
                <h4>Sort By:</h4>
                <select onChange={(e)=>{
                    setSort(e.target.value)
                }}>
                    <option value="category">Category</option>
                    <option value="recent">Recent</option>
                    <option value="sortByalpha">A-Z</option>
                    <option value="popularity">Popular</option>
                </select>
            </div>
        </animated.div>
    )
}

export default Searchbar