import './header.css';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                {/* <a className='logo' url='/'>Vilm</a> */}
                <h1 className='header__title'><span className='logo__yllow'>V</span>
                <span className='logo__blue'>I</span>
                <span className='logo__green'>V</span><span className='header__title-logo'>a</span> Cinema</h1>
                <div className='header__search'>
                    <input className='header__search_input' type='text'/>
                    <button type='button'></button>
                </div>
              
            </div>
        </header>
    )
}
