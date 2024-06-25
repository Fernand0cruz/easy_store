import { ComponentProps } from "react";

const SectionTittle = ( {children, ...props}: ComponentProps<"p"> ) => {
    return (
        <p className="uppercase mb-2" {...props}>{ children }</p>
    );
}
export default SectionTittle;