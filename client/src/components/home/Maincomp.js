
import React from 'react'
import "../home/home.css";
import { useState} from "react";
//import { products } from './productdata';
import { Rating} from '@mui/material';
import axios from 'axios';


const Maincomp = () => {

    const [prod, setProd] = useState("");
    React.useEffect(() => {
        const res = async () => {
            let resp=await axios.get("https://web-scraping-amazon-db.herokuapp.com/get");
            console.log(resp.data)
                setProd(resp.data)
            };
        res();
    }, []);
   
    return (
        <>
            <div>
                <div>
                    <div>
                        <div className='head'>RESULTS</div>
                        <hr/>
                        <div>
                            {!prod?"Loading...":prod.map((e) => {
                                    return (
                                        <div className="products_section" >
                                            <div className="products_items">
                                                <div className="product_img">
                                                    <img src={e.image} alt="product" />
                                                </div>
                                                <div>
                                                <span className="products_name" style={{fontSize:'Large' }}>{e.name}</span>
                                                <Rating value={4} size="large" />
                                                <span>{e.rating}</span>
                                                <button style={{ color:"white",backgroundColor:"red"}}>Limited time Deal</button>
                                                <span className="products_price" style={{ color:"red",fontSize:'Large' }}>₹{e.price}</span>
                                                
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                                
                            }

                        </div>

                    </div>
                    <div>

                    </div>
                </div>

            </div>



        </>
    )
}

export default Maincomp;
