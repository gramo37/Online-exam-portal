import React from "react";
import CloseIcon from '@mui/icons-material/Close';


const Option = (props) => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="name" className="mx-1 w-1/6">
          Option:
        </label>
        <input
          className="bg-gray-100 my-2 py-2 pl-2 w-5/6 mx-1 rounded-md"
          type="text"
          placeholder="Add option"
          name={props.name}
          value={props.optionValue}
          onChange={props.onOptionValueChange}
        />
        
        <div onClick={()=>{props.onClick(props.index)}} style={{transform: "translateX(15.5rem)"}} className="cursor-pointer absolute translate-x-[15rem]"><CloseIcon /></div>
      </div>
    </>
  );
};

export default Option;
