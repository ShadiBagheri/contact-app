//Image
import contactApp from "../image/contact-app.jpg";
//Styles
import styles from "../components/Header.module.css";
//Icons
// import { FaRegTrashCan } from "react-icons/fa6";
// import { IoIosArrowBack, IoIosArrowForward, IoIosCheckboxOutline, IoIosCheckbox } from "react-icons/io";
// import { FaRegEdit  } from "react-icons/fa";
// import { IoCheckmarkDoneSharp, IoCheckmarkSharp } from "react-icons/io5";

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
            {/*<FaRegTrashCan />*/}
            {/*<IoIosArrowBack />*/}
            {/*<IoIosArrowForward />*/}
            {/*<FaRegEdit />*/}
            {/*<div>*/}
            {/*    <IoIosCheckboxOutline />*/}
            {/*    <IoIosCheckbox />*/}
            {/*</div>*/}
            {/*<IoCheckmarkDoneSharp/>*/}
            {/*<IoCheckmarkSharp/>*/}
        </>
    )
}

export default Header



