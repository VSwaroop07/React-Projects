import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import UpdateDelete from "./UpdateDelete";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";

const ContactCard = ({contacts}) => {

    const {isOpen, onOpen, onClose} = useDisclose();
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "Contacts", id))
            toast.success("Contact Deleted Successfully")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    <div
        key={contacts.id}
        className="flex items-center bg-yellow-200 justify-between rounded-md p-2 m-1"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-orange-500 text-4xl" />
          <div className="">
            <h2 className="font-medium">{contacts.name}</h2>
            <p className="text-sm">{contacts.email}</p>
          </div>
        </div>
        <div className="flex text-2xl">
          <RiEditCircleLine  onClick={onOpen} className="cursor-pointer"/>
          <IoMdTrash className="text-orange-500 cursor-pointer" onClick={() => deleteContact(contacts.id)} />
        </div>
      </div>
      <UpdateDelete
       contacts={contacts} isUpdate isOpen={isOpen} onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
