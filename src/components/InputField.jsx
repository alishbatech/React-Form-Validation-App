import React from 'react'

function InputField({type,placeholder,value,onChange,onBlur,error}) {
  return (
    <div>
        <input type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        onBlur={onBlur}
         className="w-full px-5 py-3 rounded-xl bg-white/90 outline-none focus:ring-4 focus:ring-blue-500 transition"
        />
        {error && <p className="text-red-800 text-sm mt-1">
              {error}
            </p>}
    </div>
  )
}

export default InputField