import React from 'react'

interface toggleProps {
    value: boolean;
    onChange: () => void;


}

const toggle = (props: toggleProps) => {
  const toggleClass = 'transform translate-x-6';
  return (
    <div onClick={props.onChange} className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${props.value === true ? 'bg-blue-200' : 'bg-gray-300'} rounded-full p-1 cursor-pointer`}>
        <div className={` ${props.value === true ? 'bg-blue-600' : 'bg-white' } md:w-6 md:h-6 w-5 h-5 rounded-full shadow-md transition transform${props.value ? toggleClass : null }  `}>


        </div>

    </div>
  )
}

export default toggle