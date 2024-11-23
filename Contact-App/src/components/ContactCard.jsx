import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

const ContactCard = ({contacts}) => {
  return (
    <div
        key={contacts.id}
        className="flex items-center bg-yellow-200 justify-between rounded-md p-2 m-1"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-orange-500 text-4xl" />
          <div className="">
            <h2 className="font-medium">{contacts.Name}</h2>
            <p className="text-sm">{contacts.Email}</p>
          </div>
        </div>
        <div className="flex text-2xl">
          <RiEditCircleLine />
          <IoMdTrash className="text-orange-500" />
        </div>
      </div>
  );
};

export default ContactCard;
