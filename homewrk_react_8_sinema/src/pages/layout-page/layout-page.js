import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import classes from './layout-page.module.css';

export default function LayoutPage(){
    return(
        <div className={classes.layout_page}>
            <Header/>
            <>
                <Outlet/>
            </>
            <Footer/>
        </div>
    )
}