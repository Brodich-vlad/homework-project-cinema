import classes from './Footer.module.css';

export default function Footer(){
    return(
        <footer className={classes.footer}>
            <div className={classes.footer__wrapper} >
                <p  className={classes.footer__logo} >
                    VIV
                    <span className={classes.footer__logo_a}>a </span>
                    Cinema
                    <span className={classes.footer__date}> 16.07.2023 </span>
                </p>
            </div>
        </footer>
    )
}