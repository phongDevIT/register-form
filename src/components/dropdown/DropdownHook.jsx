import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropDownHook = ({ control, setValue, name, data }) => {
    const { show, setShow, nodeRef } = useClickOutSide();

    useWatch({
        control,
        name: "job",
        defaultValue: "",
    });
    const handleClickDropdownItem = (e) => {
        setValue(name, e.target.dataset.value);
        setShow(false);
        setLabel(e.target.textContent);
    };
    const [label, setLabel] = useState("Select your job");
    return (
        <div className="relative" ref={nodeRef}>
            <div
                className="flex items-center justify-between p-5 bg-white border rounded-lg cursor-pointer border-gray100"
                onClick={() => setShow(!show)}
            >
                <span>{label}</span>
            </div>
            <div
                className={`absolute top-full left-0 w-full rounded-lg bg-white ${
                    show ? "" : "opacity-0 invisible"
                }`}
            >
                {data.map((item) => (
                    <div
                        className="p-5 cursor-pointer hover:bg-gray-100"
                        onClick={handleClickDropdownItem}
                        data-value={item.value}
                        key={item.id}
                    >
                        {item.text}
                    </div>
                ))}
                {/* <div
                    className="p-5 cursor-pointer hover:bg-gray-100"
                    onClick={handleClickDropdownItem}
                    data-value="parents"
                >
                    Parents
                </div>
                <div
                    className="p-5 cursor-pointer hover:bg-gray-100"
                    onClick={handleClickDropdownItem}
                    data-value="teacher"
                >
                    Teacher
                </div>
                <div
                    className="p-5 cursor-pointer hover:bg-gray-100"
                    onClick={handleClickDropdownItem}
                    data-value="dev"
                >
                    Dev
                </div>
                <div
                    className="p-5 cursor-pointer hover:bg-gray-100"
                    onClick={handleClickDropdownItem}
                    data-value="student"
                >
                    Student
                </div> */}
            </div>
        </div>
    );
};

export default DropDownHook;
