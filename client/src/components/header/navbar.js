import React from 'react'
import "../header/navbar.css"
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbaar = () => {
  
   return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-F9bJpA5krScy3Fd7J0GrxS2OB-NXW0z5t1UOOJo64W5Z4BhuMtqV9BlZ7zFR1z4c5A&usqp=CAU" alt="logo" />
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" name="" placeholder="Search Your Products" />
                        <div className="search_icon">
                            <SearchIcon id="search"/>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <a href="">Sign in</a>
                    </div>
                    <div className='cart_btn'>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon id="icon" />
                    </Badge>
                    <p>Cart</p>
                    </div>
                    <Avatar className='avtar' />
                                      
                    <div className="menu_div">
                        <Menu>
                            <MenuItem  style={{ margin: 10 }}>My account</MenuItem>
                           
                        </Menu>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbaar;
