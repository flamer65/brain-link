import type { ReactElement } from "react";

export interface ButtonProps {
     variant: "primary" | "secondry"
     size: "sm" | "md" | "lg"
     text: string
     startIcon?: ReactElement;
     endIcon?: ReactElement;
     onClick?: ()=> void;
}
const variantStyles = {
     "primary": "bg-purple-600 text-white",
     "secondry": "bg-purple-300 text-purple-600"      
}
const defaultStyles = "rounded-md";      
const sizeStyle = {
     "sm": "p-2",
     "md": "p-4",
     "lg": "p-6"
}
export const Button = (props: ButtonProps) =>{
   return  <button className={`${props.startIcon ? <div className="pr-2">{props.startIcon}</div>: null}${variantStyles[props.variant]} ${defaultStyles} ${sizeStyle[props.size]}`}>{props.text}</button>
}