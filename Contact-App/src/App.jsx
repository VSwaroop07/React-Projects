import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactsList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex flex-grow relative items-center">
            <CiSearch className="text-white text-3xl absolute ml-1" />
            <input
              type="text"
              className="border flex-grow bg-transparent border-white rounded-md h-10 px-4 text-white pl-9 "
            />
          </div>
          <FaCirclePlus onClick={onOpen} className="text-white text-4xl cursor-pointer" />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          {contacts.map((contacts) => (
            <ContactCard key={contacts.id} contacts={contacts} />
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        Hi
      </Modal>
    </>
  );
}

export default App;
