export interface ButtonProps {
     variant: "primary" | "secondry"
     size: "sm" | "md" | "lg"
     text: string
     startIcon?: any;
     endIcon?: any;
     onClick?: ()=> void;
}
const variantStyles = {
     "primary": "bg-purple-600 text-white",
     "secondry": "bg-purple-300 text-purple-600"      
}
      
const sizeStyle = {
     "sm": "px-2 py-1 text-sm rounded-sm",
     "md": "px-2.5 py-2 text-md rounded-md",
     "lg": "px-4 py-3 text-lg rounded-lg"
}
export function Button (props: ButtonProps){
return  <><button className=
   {`${variantStyles[props.variant]}
   ${sizeStyle[props.size]}`}>
     <div className="flex items-center">
     {props.startIcon ? <div className="pr-2 ">{props.startIcon}</div>: null}
     {props.text}
     {props.endIcon ? <div className="pl-2">{props.endIcon}</div>: null}
   </div>
  </button>
  </>
}