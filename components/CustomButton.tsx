'use client'
import Image from "next/image";
import {MouseEventHandler} from "react";

interface CustomButtonPropTypes {
    title: string
    type?: "button" | "submit"
    containerStyles?: string
    textStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    rightIcon?: string
}
function CustomButton({title, containerStyles, textStyles, handleClick, type, rightIcon}: CustomButtonPropTypes) {
    return (
        <button
            disabled={false}
            type={type || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && <div className={"relative w-6 h-6"}>
                <Image src={rightIcon} alt={"postfix-icon"} fill className={"object-contain"}/>
            </div> }
        </button>
    );
}

export default CustomButton;