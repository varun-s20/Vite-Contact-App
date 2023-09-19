import React from 'react'
import {FaUserAlt, FaTrash,FaUserEdit} from "react-icons/fa"

const ContactCard = ({contact}) => {
  return (
    <div key={contact.id} className="bg-yellow flex justify-between items-center p-1 rounded-lg px-3">
        <div className="flex gap-3">
            <FaUserAlt className="text-orange text-3xl my-2"/>
            <div className="">
                <h2 className="font-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
            </div>
        </div>
        <div className="flex text-2xl gap-2">
            <FaUserEdit />
            <FaTrash className="text-orange"/>
        </div>  
    </div>
  )
}

export default ContactCard