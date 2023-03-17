import React from "react";

const RegisterFormik = () => {
    return (
        <div className="max-w-[300px] mx-auto my-10">
            <div className="flex flex-col gap-3">
                <label htmlFor="username" className="cursor-pointer">
                    UserName
                </label>
                <input
                    autoComplete="off"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="p-4 rounded-lg border border-gray-100 bg-white outline-none focus:border-blue-500 transition-all"
                />
                <p className="text-red-500 text-sm">
                    Please enter your username
                </p>
            </div>
        </div>
    );
};

export default RegisterFormik;
