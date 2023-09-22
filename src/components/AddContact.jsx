import React from 'react';
import Modal from './Modal';
import { Field, Form, Formik } from 'formik';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const AddContact = ({ isOpen, onClose }) => {

  const addContact = async (contact) => {
    try{
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name:"",
            email:""
          }}
          onSubmit={(values) => {
            addContact(values);
          }}
        >
          <Form className='px-3 flex flex-col'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='name' className='font-bold'>
                Name
              </label>
              <Field name='name' className='border rounded-md' style={{ borderColor: 'rgba(182, 102, 210, 1)' }} />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='email' className='font-bold'>
                Email
              </label>
              <Field name='email' className='border rounded-md' style={{ borderColor: 'rgba(182, 102, 210, 1)' }} />
            </div>
            <div className='flex justify-end'>
              <button className='rounded-lg p-1 mt-5' style={{ background: 'rgba(182, 102, 210, 1)' }}>
                Add Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddContact;
