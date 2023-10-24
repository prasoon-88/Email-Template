import React from 'react'
import CatelogContainer from './CatelogContainer'
import Category from './Category'
import '../style/Main.css'
const Main = () => {

  const catlogs = [
    {
      heading: "Announcement",
      cards: [
        {
          img: '/assets/banner1.png',
          name: 'Featured Service',
          popularity: 10,
        },
        {
          img: '/assets/banner2.png',
          name: 'Weekly Newsletter',
          popularity: 15,
        },
        {
          img: '/assets/banner3.png',
          name: 'New Product/Service Announcement',
          popularity: 11
        }

      ]
    },
    {
      heading: "Educate & Inform",
      cards: [
        {
          img: '/assets/banner4.png',
          name: 'Editorial Newletter',
          popularity: 2,
        },
        {
          img: '/assets/banner1.png',
          name: 'Featured Service',
          popularity: 12,
        },
        {
          img: '/assets/banner4.png',
          name: 'Editorial Newletter',
          popularity: 13,
        },
        {
          img: '/assets/banner2.png',
          name: 'Weekly Newsletter',
          popularity: 11,
        },
        {
          img: '/assets/banner1.png',
          name: 'Featured Service',
          popularity: 10,
        },
        {
          img: '/assets/banner2.png',
          name: 'Weekly Newsletter',
          popularity: 9,
        }
      ]
    },
    {
      heading: "Invitations",
      cards: [
        {
          img: '/assets/banner3.png',
          name: 'Featured Service',
          popularity: 1,
        },
        {
          img: '/assets/banner2.png',
          name: 'Weekly Newsletter',
          popularity: 8,
        },
        {
          img: '/assets/banner1.png',
          name: 'Editorial Newletter',
          popularity: 7,
        }

      ]
    },
    {
      heading: "Ocassions",
      cards: [
        {
          img: '/assets/banner4.png',
          name: 'Weekly Service',
          popularity:5,
        },
        {
          img: '/assets/banner3.png',
          name: 'Editorial Newletter',
          popularity: 6,
        },
        {
          img: '/assets/banner1.png',
          name: 'New Sercice',
          popularity: 12,
        }

      ]
    }
  ]
  return (
    <main className='main'>
      <Category />
      <CatelogContainer catlogs={catlogs} />
    </main>
  )
}

export default Main