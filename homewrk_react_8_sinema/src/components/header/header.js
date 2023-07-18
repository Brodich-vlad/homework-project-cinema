import './header.css';

export default function Header() {
    // Якщо не головна сторінка приховати поле пошуку.
    // const location = document.location.pathname;

    return (
        <header className='header'>
            <div className='header__wrapper'>
                <h1 className='header__title'><span className='logo__yllow'>V</span>
                <span className='logo__blue'>I</span>
                <span className='logo__green'>V</span><span className='header__title-logo'>a</span> Cinema</h1>


                <div className='header__search'>
                    <input className='header__search_input' type='text'/>
                    <button className='header__search_btn' type='button'></button>
                </div>
              
            </div>
        </header>
    )
}
