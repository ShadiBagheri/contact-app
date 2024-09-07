import { useState } from "react";
// Components
import ContactList from "./ContactList.jsx";
// Styles
import styles from "../components/Contacts.module.css";
import { v4 as uuidv4 } from 'uuid';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setContact((prevContact) => ({ ...prevContact, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };

    const validateContact = (contact) => {
        let error = {};

        if (!contact.name.trim()) {
            error.name = "Name is required";
        }

        if (!contact.lastName.trim()) {
            error.lastName = "Last name is required";
        }

        if (!contact.email) {
            error.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(contact.email)) {
            error.email = "Email Address is invalid";
        }

        if (!contact.phone) {
            error.phone = "Phone number is required";
        } else if (contact.phone.length < 11) {
            error.phone = "Phone number must be at least 11 digits";
        }
        return error;
    }

    const addHandler = () => {
        const validationErrors = validateContact(contact);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const newContact = { ...contact, id: uuidv4() };
        setContacts((prevContacts) => [...prevContacts, newContact]);
        resetForm();
    };

    const editHandler = (id) => {
        const contactToEdit = contacts.find(c => c.id === id);
        setContact(contactToEdit);
    };

    const saveEditHandler = () => {
        const validationErrors = validateContact(contact);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setContacts(contacts.map(c => (c.id === contact.id ? contact : c)));
        resetForm();
    };

    const deleteHandler = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const resetForm = () => {
        setContact({
            id: "",
            name: "",
            lastName: "",
            email: "",
            phone: "",
        });
        setErrors({ name: "", lastName: "", email: "", phone: "" });
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm)
    );

    return (
        <>
            <div className={styles.container}>
                <h2>{contact.id ? "Edit Contact" : "Add Contact"}</h2>
                <div className={styles.inp}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contact.name}
                        onChange={changeHandler}
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div className={styles.inp}>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={contact.lastName}
                        onChange={changeHandler}
                    />
                    {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
                </div>
                <div className={styles.inp}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={contact.email}
                        onChange={changeHandler}
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div className={styles.inp}>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={contact.phone}
                        onChange={changeHandler}
                    />
                    {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                </div>
                {
                    contact.id ?
                        <button onClick={saveEditHandler}>Save Changes</button> :
                        <button onClick={addHandler}>Add Contact</button>
                }
            </div>
            <div className={styles.inp}>
                <div className={styles.searchBox}>
                    <input
                        className={styles.search}
                        type="text"
                        placeholder="Search Contacts"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div>
                {filteredContacts.length ? (
                    <ContactList
                        contacts={filteredContacts}
                        deleteHandler={deleteHandler}
                        editHandler={editHandler}
                    />
                ) : (
                    <div>
                        <p className={styles.noContacts}>No Contacts Found!</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Contacts;
