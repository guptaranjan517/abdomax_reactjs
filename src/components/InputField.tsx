"use client";
import React, { Fragment, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  htmlFor: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <Fragment>
      <div className="relative z-0 w-full mb-10 group">
        <input
          {...props}
          placeholder={props.placeholder || " "} 
          className="block py-4 px-0 w-full text-md text-placeholdertxt bg-transparent border-0 border-b gradient-border-bottom appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lightGreen focus:outline-none focus:ring-0 focus:border-lightGreen peer"
        />
        <label
          htmlFor={props.htmlFor}
          className="absolute text-md text-placeholdertxt dark:text-gray-400 duration-300 transform transition-all -translate-y-6 scale-75 top-0 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-lightGreen peer-focus:dark:text-lightGreen"
        >
          {props.label}
        </label>
      </div>
      {props.error && (
        <p className="text-red-500 font-bold font-openSans text-sm pl-1">
          {props.error}
        </p>
      )}
    </Fragment>
  );
};

export default InputField;
