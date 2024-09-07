import { CiMail } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
// Styles
import styles from "../components/ContactList.module.css";

const ContactList = ({ contacts, deleteHandler, editHandler }) => {
    return (
        <div className={styles.containerList}>
            <div className={styles.scrollableContacts}>
                {contacts.map(contact => (
                    <div key={contact.id} className={styles.contact}>
                        <div className={styles.text}>
                            <p>{contact.name} {contact.lastName}</p>
                            <p><CiMail className={styles.pIcon}/> {contact.email}</p>
                            <p><MdOutlineLocalPhone className={styles.pIcon}/> {contact.phone}</p>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.iconBtn} onClick={() => editHandler(contact.id)}><FaRegEdit /></button>
                            <button className={styles.iconBtn} onClick={() => deleteHandler(contact.id)}><FaRegTrashCan /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;