import React from "react";
import { useController } from "react-hook-form";
// import "../../index.css";

const RadioHook = ({ control, ...props }) => {
    // const name = props?.name ?? "";
    const { field } = useController({
        control,
        name: props.name,
    });

    return (
        <label className="cursor-pointer custom-radio">
            <input className="hidden" type="radio" {...field} {...props} />
            <div className="bg-white rounded-full w-full h-full checked:bg-blue-500"></div>
        </label>
    );
};

export default RadioHook;
