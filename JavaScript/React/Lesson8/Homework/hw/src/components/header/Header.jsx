import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.svg'
import burger from '../../assets/img/burger.svg'
import cart from '../../assets/img/cart.svg'
import userIcon from '../../assets/img/user.svg'

const Header = () => {
    const { items } = useSelector(state => state.cart);

    return (
        <header>
            <div className="container">

                <div className="logo-container">
                    <Link to='/'>
                        <img src={logo} alt=""/>
                    </Link>
                </div>

                <div className="search-container">
                    <Link to='search'>
                        <img src={search} alt=""/>
                    </Link>
                </div>

                <div className="menu-container">
                    <ul className="main-menu horizontal-menu">
                        <li>
                            <Link to='#'>
                                <img src={burger} alt=""/>
                            </Link>
                            <div className="dropdown">
                                <h3>MENU</h3>
                                <h4>MAN</h4>
                                <ul className="menu">
                                    <li>
                                        <NavLink to='products'>Accessories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Bags</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Denim</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>T-Shirts</NavLink>
                                    </li>
                                </ul>
                                <h4>WOMAN</h4>
                                <ul className="menu">
                                    <li>
                                        <NavLink to='products'>Accessories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Jackets & Coats</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Polos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>T-Shirts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Shirts</NavLink>
                                    </li>
                                </ul>
                                <h4>KIDS</h4>
                                <ul className="menu">
                                    <li>
                                        <NavLink to='products'>Accessories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Jackets & Coats</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Polos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>T-Shirts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Shirts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='products'>Bags</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="user">
                            <Link to='#'>
                                <img src={userIcon} alt=""/>
                            </Link>
                        </li>
                        <li className="cart">
                            <Link to='cart'>
                                <img src={cart} alt=""/>
                            </Link>
                            <span className="cart-count">{items.length}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header