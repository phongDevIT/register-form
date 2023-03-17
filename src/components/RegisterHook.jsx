import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "./input/InputHook";

const RegisterHook = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const onSubmitHandler = (values) => {
        console.log(values);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-[300px] mx-auto my-10"
        >
            <div className="flex flex-col gap-3">
                <label htmlFor="username" className="cursor-pointer">
                    UserName
                </label>
                <InputHook
                    name="username"
                    placeholder="Enter your username"
                    id="username"
                    control={control}
                ></InputHook>
                {/* <input
                    autoComplete="off"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="p-4 rounded-lg border border-gray-100 bg-white outline-none focus:border-blue-500 transition-all"
                /> */}
                <p className="text-red-500 text-sm">
                    Please enter your username
                </p>
                <button className="w-full bg-blue-500 p-5 text-white rounded-lg font-semibold">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default RegisterHook;
