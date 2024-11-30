import { cx } from "class-variance-authority"
import React from "react"
// max width 1400px margin auto;

export const HStack = ({className, children} : {className?:string, children:React.ReactNode}) => {
    return (
        <div id= 'hstack_id' className={cx("w-full flex gap-1.5 m-auto max-w-[1400px]", className)}>
            {children}
        </div>
    )
} 
