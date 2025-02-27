

import React from 'react'

type Props = {
    children : React.ReactNode;
}


const Heading4:React.FC<Props> = ({children}) => {
  return (
    <h4 className='font-medium text-2xl text-balance py-8'>{children}</h4>
  )
}

export default Heading4;