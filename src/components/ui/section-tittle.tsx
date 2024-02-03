import { ComponentProps } from "react";

const SectionTittle = ( {children, ...props}: ComponentProps<"p"> ) => {
    return (
        <p className="pl-5 font-bold uppercase mb-3" {...props}>{ children }</p>
    );
}

export default SectionTittle;