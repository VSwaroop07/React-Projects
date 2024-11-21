import Button from "../Button/Button";
import styles from "./Form.module.css";
import { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosCall, IoMdMailOpen } from "react-icons/io";



const Form = () => {
    const [name, setName] = useState("Swaroop");
    const [email , setEmail] = useState("Example@gmail.com");
    const [text , setText] = useState("Non");
    const fun = (event) => {
        event.preventDefault()
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contactForm}>
          <div className={styles.btnC}>
            <Button
              text="VIA SUPPORT CHAT"
              onClick = {fun}
              icon={<LuMessagesSquare fontSize="24px" />}
            />
            <Button text="VIA CALL" icon={<IoIosCall fontSize="24px" />} />
            <Button
              isOutline={true}
              text="VIA SUPPORT EMAIL"
              icon={<IoMdMailOpen fontSize="24px" />}
            />
          </div>

          <form action="" onSubmit={fun}>
            <div className={styles.formControls}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="" />
              <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="" />
              </div>
              <div className={styles.text}>
              <label htmlFor="text">TEXT</label>
              <input type="text" name="text" id=""/>
              </div>
            </div>
            <Button text="Submit" />
          </form>
          <div className="">
            {name + " " + email + " " + text}
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
