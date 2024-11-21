import styles from "./Button.module.css"
import {LuMessagesSquare} from "react-icons/lu"
import { IoIosCall } from "react-icons/io";
const Button = ({isOutline, icon, text, ...rest}) => {
    return (
        
            <button className={isOutline ? styles.Outline_btn : styles.btn} {...rest}>
            {icon}
            {text}
            </button>
        
    )
}

export default Button