import { React, useState, useEffect } from 'react';
import { GET_USER_TATTOOS_URL, GET_TATTOOS_URL } from '../config';
import Header from './Header';
import '../styles/saved.css'

/*const dummyTattoos = [
    {
        id: 1,
        image: 'https://static01.nyt.com/images/2021/07/11/fashion/10PANDEMIC-TATTOOS-1/10PANDEMIC-TATTOOS-1-superJumbo.jpg'
    },
    {
        id: 2,
        image: 'https://ichef.bbci.co.uk/news/1024/branded_news/0D6E/production/_111883430_chris_torso.jpg'
    },
    {
        id: 3,
        image: 'https://i.guim.co.uk/img/media/f6c77429ba6ce8bf2527c150551157b06d788b99/0_182_7276_4366/master/7276.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&s=a0cbcbde6e8774b43cce7a2836d775a2'
    },
    {
        id: 4,
        image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/03/female-arm-tattoo-1296-728-header.jpg?w=1155&h=1528'
    }
]*/

const Saved = () => {
    const [tattoos, setTattoos] = useState([])
    const [refresh, setRefresh] = useState(false)

    const unsaveTattoo = async (url) => {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const handleUnsaveTattoo = async (e) => {
        e.preventDefault()
        console.log(e.target.id)
        const UNSAVE_TATTOO_URL = GET_TATTOOS_URL + 'disconnect/' + e.target.id + '/1'
        await unsaveTattoo(UNSAVE_TATTOO_URL)
        if (refresh === false) {
            setRefresh(true)
        } else {
            setRefresh(false)
        }
    }

    useEffect(() => {
        const getTattoosFromDB = async () => {
            const res = await fetch(GET_USER_TATTOOS_URL)
            const fetchedTattoos = await res.json()
            console.log(fetchedTattoos)
            setTattoos(fetchedTattoos.data)
        }
        getTattoosFromDB()
    }, [refresh])

    return (
        <>
            <Header />
            <div className='saved-container'>
                <h1 className='saved-title'>My Saved Tattoos</h1>
                <div className='saved-main'>
                    {tattoos &&
                        tattoos.map((tattoo, index) => {
                            return (
                                <div key={index}>
                                    <img src={tattoo.image} alt="tattoo" />
                                    <button className='unsave-tattoo' id={tattoo.id} onClick={e => handleUnsaveTattoo(e)}>Unsave</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Saved