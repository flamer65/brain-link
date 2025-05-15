export interface ButtonProps {
     variant: "primary" | "secondry"
     size: "sm" | "md" | "lg"
     text: string
     startIcon?: any;
     endIcon?: any;
     onClick: ()=> void;
}
const variantStyles = {
     "primary": "bg-purple-300 text-white",
     "secondry": "bg-purple-400 text-purple-600"      
}
const defaultStyles = "rounded-md p-4";      
const sizeStyle = {
     "sm": "p-2",
     "md": "p-4",
     "lg": "p-6"
}
export const Button = (props: ButtonProps) =>{
   return  <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyle[props.size]}`}>{props.text}</button>
}