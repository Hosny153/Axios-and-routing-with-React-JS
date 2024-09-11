import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function Home() {
    const [news, setnews] = useState([])
    const getnews = async () => {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=cc07513c15f54bb18b15fc501002166c`)
        setnews(res.data.articles)
    }
    useEffect(() => {
        getnews()
    }, [])

    return (
        <>
            <section className='container'>
                {
                    news.map((item) => {
                        return (
                            <>
                                <div className='d-flex justify-content-evenly' >
                                    <div className="card mt-4" style={{ width: '18rem' }}>
                                        <div className='row'>
                                            <img src={item.urlToImage} alt="" />
                                        </div>
                                    </div>
                                    <div className='col-10 mt-5 ms-4'>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}
