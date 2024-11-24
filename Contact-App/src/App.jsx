import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs, onSnapshot, snapshotEqual } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import UpdateDelete from "./components/UpdateDelete";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoContact from "./components/NoContact";


function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onOpen, onClose} = useDisclose();


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        
        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactsList);
          return contactsList;
        })

      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  
  const filterContacts = (e) => {
      const value = e.target.value;
      
      const contactsRef = collection(db, "Contacts");
      
      onSnapshot(contactsRef, (snapshot) => {
        const contactsList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        const filteredContacts = contactsList.filter(contacts => contacts.name.toLowerCase().includes(value.toLowerCase()))

        setContacts(filteredContacts);

        return filteredContacts;
      })
    }

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex flex-grow relative items-center">
            <CiSearch className="text-white text-3xl absolute ml-1" />
            <input
              onChange={filterContacts}
              type="text"
              className="border flex-grow bg-transparent border-white rounded-md h-10 px-4 text-white pl-9 "
            />
          </div>
          <FaCirclePlus onClick={onOpen} className="text-white text-4xl cursor-pointer" />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          {contacts.length <= 0 ? <NoContact /> : contacts.map((contacts) => (
            <ContactCard key={contacts.id} contacts={contacts} />
          ))}
        </div>
      </div>
      <UpdateDelete isOpen={isOpen} onClose={onClose} />
      <ToastContainer
      position="botton"
      />
    </>
  );
}

export default App;
