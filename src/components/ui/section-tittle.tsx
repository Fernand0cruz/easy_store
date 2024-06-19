import { ComponentProps } from "react";

const SectionTittle = ( {children, ...props}: ComponentProps<"p"> ) => {
    
    return (
        <p className="font-bold uppercase mb-3" {...props}>{ children }</p>
    );
}
export default SectionTittle;