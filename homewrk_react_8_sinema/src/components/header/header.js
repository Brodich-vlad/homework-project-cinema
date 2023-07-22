import { useMemo, useState, useContext } from 'react';
import './header.css';

import { Context } from '../сontext';



export default function Header() {
    // Якщо не головна сторінка приховати поле пошуку.
    // const location = document.location.pathname;


    // Отримуємо контекст.
    const {films} = useContext(Context);

    const [searchInput, setSearchInput] = useState('')

    const search = useMemo(() => {

        // const test = [...films].filter(el=>el.name.includes(searchInput)) 
        //  console.log(test)
    },[searchInput])

    const sort = (elem) => {

        // setSearchInput(elem)

        const test = films.filter(el=>el.name.toLowerCase().includes(elem)) 
         console.log(test) 
    }
   
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <h1 className='header__title'><span className='logo__yllow'>V</span>
                <span className='logo__blue'>I</span>
                <span className='logo__green'>V</span><span className='header__title-logo'>a</span> Cinema</h1>


                <div className='header__search'>
                    <input onChange={(value) => {
                        // console.log(value.target.value)
                        sort(value.target.value)
                    }} className='header__search_input' type='text'/>
                    <button className='header__search_btn' type='button'></button>
                </div>
              
            </div>
        </header>
    )
}
