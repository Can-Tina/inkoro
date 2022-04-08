import { React, useState, useEffect } from 'react';
import { GET_TATTOOS_URL } from '../config';
import Header from './Header';
import './../styles/explore.css'

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

const Explore = () => {
    const [tattoos, setTattoos] = useState([])

    useEffect(() => {
        const getTattoosFromDB = async () => {
            const res = await fetch(GET_TATTOOS_URL)
            const fetchedTattoos = await res.json()
            setTattoos(fetchedTattoos.data)
        }
        getTattoosFromDB()
    }, [])

    const saveTattoo = async (url) => {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const handleSaveTattoo = (e) => {
        e.preventDefault()
        const SAVE_TATTOO_URL = GET_TATTOOS_URL + 'connect/' + e.target.id + '/1'
        saveTattoo(SAVE_TATTOO_URL)
    }

    return (
        <>  
            <Header />
            <div className='explore-container'>
                <div className='filters-container'>
                    <div className='styles-container'>
                        <p>Styles</p>
                        <div className='style-box'>
                            <input type='checkbox' id='old-school' name='old-school' value='Old School' />
                            <label htmlFor='old-school'>Old School</label>
                        </div>
                        <div className='style-box'>
                            <input type='checkbox' id='new-school' name='new-school' value='New School' />
                            <label htmlFor='new-school'>New School</label>
                        </div>
                        <div className='style-box'>
                            <input type='checkbox' id='portrait' name='portrait' value='Portrait' />
                            <label htmlFor='portrait'>Portrait</label>
                        </div>
                        <div className='style-box'>
                            <input type='checkbox' id='geometric' name='geometric' value='Geometric' />
                            <label htmlFor='geometric'>Geometric</label>
                        </div>
                        <div className='style-box'>
                            <input type='checkbox' id='japanese' name='japanese' value='Japanese' />
                            <label htmlFor='japanese'>Japanese</label>
                        </div>
                        <div className='style-box'>
                            <input type='checkbox' id='realism' name='realism' value='Realism' />
                            <label htmlFor='realism'>Realism</label>
                        </div>
                    </div>
                    <div className='colours-container'>
                        <p>Colours</p>
                        <div className='colour-box'>
                            <input type='checkbox' id='colour' name='colour' value='Colour' />
                            <label htmlFor='colour'>Colour</label>
                        </div>
                        <div className='colour-box'>
                            <input type='checkbox' id='black-and-white' name='black-and-white' value='Black and White' />
                            <label htmlFor='black-and-white'>Black and White</label>
                        </div>
                        <div className='colour-box'>
                            <input type='checkbox' id='lineart' name='lineart' value='Lineart' />
                            <label htmlFor='lineart'>Lineart</label>
                        </div>
                    </div>
                </div>
                <div className='explore-main'>
                    {tattoos &&
                        tattoos.map((tattoo, index) => {
                            return (
                                <div className='img-box' key={index}>
                                    <img src={tattoo.image} alt="tattoo" className='image' />
                                    <button className='save-tattoo' id={tattoo.id} onClick={e => handleSaveTattoo(e)}>Save</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default Explore