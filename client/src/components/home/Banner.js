import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "../home/banner.css";

const data = [
    "https://m.media-amazon.com/images/I/61qP7aqsynL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71J3ec2LQzL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71zAya4ZmhL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61NG8nlpYfL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61k6hqpuqKL._SX3000_.jpg"
]

// console.log(data);

const Banner = () => {
    return (
        <>
            {/* <Carousel className='carasousel'>
                {
                    data.map((img,i)=>{
                        return(
                            <>
                            <img src="" alt="" className='banner_img' />
                            </>

                        )
                    })
                }
            </Carousel> */}
        </>
    )
}

export default Banner;
