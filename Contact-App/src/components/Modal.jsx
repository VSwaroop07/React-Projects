import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className=" backdrop-blur h-screen w-screen absolute z-40 top-0">
          <div className="m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
          <div className=" grid place-items-center backdrop-blur h-screen w-screen absolute z-40 top-0" onClick={onClose}/>

          
        </div>
      )}
    </>
  ,document.getElementById("modal-root"));
};

export default Modal;
