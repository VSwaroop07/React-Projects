import { Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const UpdateDelete = ({ isOpen, onClose, isUpdate, contacts }) => {
  const addContact = async (contact) => {
    try {
      const ContactRef = collection(db, "Contacts");
      await addDoc(ContactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? { name: contacts.name, email: contacts.email, }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            addContact(values);
            // console.log(values)
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <lable htmlFor="Name">Name </lable>
              <Field name="Name" className="border h-10 " />
              <lable htmlFor="Email">Email </lable>
              <Field type="email" name="Email" className="border h-10 " />
            </div>
            <button
              type="submit"
              className="bg-orange-400 px-3 py-1.5 border self-end "
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default UpdateDelete;
