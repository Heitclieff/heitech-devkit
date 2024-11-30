import { cx } from "class-variance-authority"
import React from "react"
// max width 1400px margin auto;

export const VStack = ({className, children} : {className?:string, children:React.ReactNode}) => {
    return (
        <div id= 'vstack_id' className={cx("w-full h-full m-auto max-w-[1400px]", className)}>
            {children}
        </div>
    )
} 