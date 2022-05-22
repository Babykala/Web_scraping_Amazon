
import React from 'react'
//import Banner from './Banner'
import "../home/home.css";
import axios from "axios";
import { useState } from "react";


const Maincomp = () => {

    const [product, setProduct] = useState("");

    const getData = async () => {

        var res = await axios.get("http://localhost:3001/getproducts");

        var data1 = res.data;
        setProduct(res.data)
        console.log(data1[0].name)

    }
    getData();

    return (
        <>
            <div>
                <div>
                    <div>
                        <h3>RESULTS</h3>
                        <div>
                            {

                                product.map((e) => {
                                    return (
                                        <div className="products_items">
                                            <div className="product_img">
                                                <img src={e.image} alt="product" />
                                            </div>
                                            <p className="products_name">{e.name}</p>
                                            <p className="products_price">{e.price}</p>
                                            <p className="products_rating">{e.rating}</p>
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
