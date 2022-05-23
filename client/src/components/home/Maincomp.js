
import React from 'react'
import Banner from './Banner'
import "../home/home.css";
import axios from "axios";
import { useEffect } from "react";
import { products } from './productdata';


const Maincomp = () => {

    //const [prod, setProd] = useState("");
    useEffect(() => {
        const res = async () => {
            let resp = await axios.get("http://localhost:3001/get");
            console.log(resp.data);

        };
        res();
    }, []);

    return (
        <>
            <div>
                <div>
                    <Banner />
                    <div>
                        <h1>RESULTS</h1>
                        <div>
                            {
                                products.map((e) => {
                                    return (
                                        <div className="products_section">
                                            <div className="products_items">
                                                <div className="product_img">
                                                    <img src={e.image} alt="product" />
                                                </div>
                                                <p className="products_name">{e.name}</p>
                                                <p className="products_price" style={{ color:"red",fontSize:'Large' }}>₹{e.price}</p>
                                                <p className="products_rating">{e.rating}</p>
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
