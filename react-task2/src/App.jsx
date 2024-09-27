import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactsProvider } from "./context/ContactsContext";
//Components
import Header from "./components/Header.jsx";
import Contacts from "./components/Contacts.jsx";

function App() {
    return (
        <BrowserRouter>
            <ContactsProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Contacts />} />
                </Routes>
            </ContactsProvider>
        </BrowserRouter>
    );
}

export default App;

