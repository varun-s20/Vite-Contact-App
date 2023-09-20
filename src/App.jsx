import Navbar from "./components/Navbar"
import {FcSearch} from "react-icons/fc"
import {BsFillPersonPlusFill} from "react-icons/bs"
import { useEffect, useState } from "react"
import {collection, getDocs} from 'firebase/firestore'
import { db } from "./config/firebase"
import ContactCard from "./components/ContactCard"
import Modal from "./components/Modal"
import AddContact from "./components/AddContact"

const App = () => {

  const [contacts, setContacts] = useState([]);

  const [ isOpen, setOpen ] = useState(false);

  const onOpen = () => {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    const getContacts = async () => {
      try{
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc) => {
          return{
            id: doc.id,
            ...doc.data(),
          }
        });
        setContacts(contactsList);
      }catch(error){
        console.log(error);
      }
    };

    getContacts();
  }, [])

  return (
    <>
      <div className="mx-auto max-w-[500px] px-4">
        <Navbar />
        <div className="flex gap-3">
          <div className="relative flex items-center flex-grow">
            <FcSearch className="ml-2 text-white text-2xl absolute "/>
            <input type="text" className="h-8 rounded-lg border border-white bg-transparent flex-grow pl-10 text-white" />
          </div>
          <BsFillPersonPlusFill onClick={onOpen} className="text-white text-2xl cursor-pointer my-2"/>
        </div>
        <div className="mt-5 gap-4 flex flex-col">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))}
        </div>
      </div>
      <AddContact 
      onClose={onClose}
      isOpen={isOpen}
      />
    </>
  )
}

export default App