import React, { SVGProps } from 'react'

type Props = {
    children: React.ReactNode;
}


function Dot (props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0 60a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></path></svg>
    )
}

const ListHeading: React.FC<Props> = ({children}) => {
    return (
        <em className='inline-flex items-center gap-2 py-4 text-lg  text-brand text-balance not-italic'><span className="text-brand text-lg"><Dot/></span>{children}</em>
    )
}

export default ListHeading;