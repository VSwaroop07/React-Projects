import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactShemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Email is Ivalid").required("Email is Required"),
});

const UpdateDelete = ({ isOpen, onClose, isUpdate, contacts }) => {
  const addContact = async (contact) => {
    try {
      const ContactRef = collection(db, "Contacts");
      await addDoc(ContactRef, contact);
      toast.success("Contact Created Successfully");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const ContactRef = doc(db, "Contacts", id);
      await updateDoc(ContactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactShemaValidation}
          initialValues={
            isUpdate
              ? { name: contacts.name, email: contacts.email }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contacts.id) : addContact(values);
            // console.log(values)
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="Name">Name </label>
              <Field name="name" className="border h-10 " />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email</label>
              <Field type="email" name="email" className="border h-10 " />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div>
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
