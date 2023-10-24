import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import Catelog from './Catelog'
import { Mycontext } from '../App'
import { useContext } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Card from './Card'
const CatelogContainer = ({ catlogs }) => {
  const { category, search, sort } = useContext(Mycontext);
  const [result, setResult] = useState([]);

  const style = useSpring({
    from: { x: 200, opacity: 0 },
    to: { x: 0, opacity: 1 },
  })


  const filterSearch = () => {
    document.querySelector('.searchbar').classList.remove('error')
    if (!search && sort == 'category') {
      setResult([]);
      return
    }
    let items = []
    catlogs.forEach(catlog => {
      catlog.cards.forEach(card => {
        items.push(card)
      })
    })

    const filteredItems = items.filter(item => {
      const nameMatches = item.name.toLowerCase().includes(search.toLowerCase());
      return nameMatches;
    });

    if (!filteredItems.length) {
      document.querySelector('.searchbar').classList.add('error')
    }

    if (sort == 'popularity') {
      filteredItems.sort((a, b) => b.popularity - a.popularity);
    } else if (sort == 'sortByalpha') {
      filteredItems.sort((a, b) => a.name.localeCompare(b.name))
    }

    setResult(filteredItems)
  }
  useEffect(() => {
    filterSearch();
  }, [search, sort])


  return (
    <div className="container">
      <Searchbar />
      <div className="catelog-container">
        {
          result.length ?
            <animated.div className='cards-main'>
              {
                result.map((card, index) => <Card key={index} card={card} />)
              }
            </animated.div>
            :
            catlogs.map((catelog, index) => {
              if (category.includes(catelog.heading) || category == '') {
                return <animated.div key={index} className='catelogDiv' style={style}><Catelog catelog={catelog} /></animated.div>;
              }
            })
        }
      </div>
    </div>
  )
}

export default CatelogContainer