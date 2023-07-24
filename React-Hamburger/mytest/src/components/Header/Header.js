import React, { useState } from 'react'
import './Header.css'

function Header() {
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu_class, setMenuClass] = useState('menu hidden');
    const [clicked, setClicked] = useState(false)

    const updateMenu = ()=>{
        if(!clicked){
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visible')
        }
        else{
            setBurgerClass('burger-bar unclicked');
            setMenuClass('menu hidden')
        }

        setClicked(!clicked)
    }
  return (
    <header>
        <nav>
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>
        </nav>

        <div className={menu_class}></div>
    </header>
  )
}

export default Header;