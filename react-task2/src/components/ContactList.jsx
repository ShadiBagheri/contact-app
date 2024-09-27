// //Icons
// import { CiMail } from "react-icons/ci";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { MdOutlineLocalPhone } from "react-icons/md";
// import { FaRegEdit } from "react-icons/fa";
// import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
// // Styles
// import styles from "../components/ContactList.module.css";
// import {useState} from "react";
//
// const ContactList = ({ contacts, deleteHandler, editHandler }) => {
//
//     // const [isShow, setIsShow] = useState(false);
//     //
//     // const showHandler = () => setIsShow(true)
//     // const hideHandler = () => setIsShow(false)
//
//
//     return (
//         <div className={styles.containerList}>
//             <div className={styles.scrollableContacts}>
//                 {contacts.map(contact => (
//                     <div key={contact.id} className={styles.contact}>
//                         <div className={styles.text}>
//                             <p>{contact.name} {contact.lastName}</p>
//                             <p><CiMail className={styles.pIcon}/> {contact.email}</p>
//                             <p><MdOutlineLocalPhone className={styles.pIcon}/> {contact.phone}</p>
//                         </div>
//                         <div className={styles.buttons}>
//                             <button className={styles.iconBtn} onClick={() => editHandler(contact.id)}>
//                                 <FaRegEdit />
//                             </button>
//                             <div>
//                                 <button className={styles.iconBtn} onClick={() => deleteHandler(contact.id)}>
//                                     <FaRegTrashCan />
//                                 </button>
//                                 <button className={styles.iconBtn} onClick={() => deleteHandler(contact.id)}>
//                                     <BsCheckCircleFill />
//                                 </button>
//                                 <button className={styles.iconBtn} onClick={() => deleteHandler(contact.id)}>
//                                     <BsCheckCircle />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default ContactList;


// import { CiMail } from "react-icons/ci";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { MdOutlineLocalPhone } from "react-icons/md";
// import { FaRegEdit } from "react-icons/fa";
// import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
// import styles from "../components/ContactList.module.css";
//
// const ContactList = ({ contacts, deleteHandler, editHandler, selectedContacts, toggleSelect }) => {
//     return (
//         <div className={styles.containerList}>
//             <div className={styles.scrollableContacts}>
//                 {contacts.map(contact => (
//                     <div key={contact.id} className={styles.contact}>
//                         <div className={styles.text}>
//                             <p>{contact.name} {contact.lastName}</p>
//                             <p><CiMail className={styles.pIcon}/> {contact.email}</p>
//                             <p><MdOutlineLocalPhone className={styles.pIcon}/> {contact.phone}</p>
//                         </div>
//                         <div className={styles.buttons}>
//                             <button className={styles.iconBtn} onClick={() => editHandler(contact.id)}>
//                                 <FaRegEdit />
//                             </button>
//                             <div>
//                                 {selectedContacts.includes(contact.id) ? (
//                                     <>
//                                         <button className={styles.iconBtn} onClick={() => toggleSelect(contact.id)}>
//                                             <BsCheckCircleFill />
//                                         </button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <button className={styles.iconBtn} onClick={() => toggleSelect(contact.id)}>
//                                             <FaRegTrashCan />
//                                         </button>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ContactList;


import { CiMail } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import styles from "../components/ContactList.module.css";

const ContactList = ({ contacts, deleteHandler, editHandler, selectedContacts, toggleSelect }) => {
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
                            <button className={styles.iconBtn} onClick={() => editHandler(contact.id)}>
                                <FaRegEdit />
                            </button>
                            <button className={styles.iconBtn} onClick={() => toggleSelect(contact.id)}>
                                {selectedContacts.includes(contact.id) ? (
                                    <BsCheckCircleFill />
                                ) : (
                                    <BsCircle />
                                )}
                            </button>
                            <button className={styles.iconBtn} onClick={() => deleteHandler(contact.id)}>
                                <FaRegTrashCan />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;
