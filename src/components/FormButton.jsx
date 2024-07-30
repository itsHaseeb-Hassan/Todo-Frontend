import React from 'react'

const FormButton = ({text,onClick,color}) => {
  return (
    <div>
           <button
            onClick={onClick}
            className={`px-4 py-2 w-full   text-white rounded `}
            style={{ backgroundColor: color }}
        >
         {text}   
        </button>
    </div>
  )
}

export default FormButton