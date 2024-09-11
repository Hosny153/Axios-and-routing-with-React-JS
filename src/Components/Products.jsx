import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
export default function Products() {
    const [products, setproducts] = useState([])
    const getproducts = async ()=>{
        const res = await axios.get(`https://fakestoreapi.com/products`)
        setproducts(res.data)
    }
    useEffect(()=>{
        getproducts()
    },[])


  return (
    <>
    
        <section className='container'>
        {
            products.map((item) => {
                return (
                    <>
                        <div className='d-flex justify-content-evenly' >
                            <div className="card mt-4" style={{ width: '18rem' }}>
                                <div className='row'>
                                    <img src={item.image} alt="" />
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
