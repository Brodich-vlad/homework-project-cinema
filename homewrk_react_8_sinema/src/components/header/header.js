import { useState, useContext } from 'react';
import './header.css';

import { Context } from '../сontext';

import { useMatch } from 'react-router';

export default function Header() {
    // Якщо не головна сторінка приховати поле пошуку.  
    const match = useMatch('/');

    // Отримуємо контекст.
    const { callbackSetSearchInput } = useContext(Context);

    // Стан строки інпута.
    const [inputValue, setInputValuet] = useState('')

    const search = (elem) => {
        setInputValuet(elem)
    }
   
    const clickSearch = (str) => {
        callbackSetSearchInput(str)
        setInputValuet('')
    }


    return (
        <header className='header'>
            <div className='header__wrapper'>
                <h1 className='header__title'><span className='logo__yllow'>V</span>
                <span className='logo__blue'>I</span>
                <span className='logo__green'>V</span><span className='header__title-logo'>a</span> Cinema</h1>

              
              { match  ? <div className='header__search'>
                    <input value={inputValue} onChange={(value) => {
                        search(value.target.value)
                    }} className='header__search_input' type='text' />
                    
                    <button onClick={() => {
                        clickSearch(inputValue)
                    }} className='header__search_btn' type='button'></button>
                </div>: null}
         
            </div>
        </header>
    )
}
