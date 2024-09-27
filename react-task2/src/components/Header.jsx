//Image
import contactApp from "../image/contact-app.jpg";
//Styles
import styles from "../components/Header.module.css";

const Header = () => {

    return(
        <>
            <div className={styles.container}>
                <h1>Welcome to
                    <br/>
                    <span>Contact App!</span>
                </h1>
                <img className={styles.image} src={contactApp} alt="photo"/>
            </div>
        </>
    )
}

export default Header



