import React from "react";

const NewUser = ({ data, loading }) => {

    return (
        <div className="flex h-full p-4">

            {loading ? <p>Loading...</p> : (
                <div className="flex flex-col h-full w-full">
                    <div className="flex justify-between w-full">
                        <p className="text-left text-xs m-1 p-1 text-gray-500 font-light">New Users</p>
                        <button className="text-base px-2 text-gray-500 font-semibold text-center flex">...</button>
                    </div>
                    <p className="font-bold text-3xl p-1 text-left flex items-center">94.2%
                    <span className="text-[10px] border rounded-full text-white bg-green-500 font-normal flex items-center p-1 h-5 ml-1">+6.9%</span>
                    </p>
                </div>
            )}

        </div>

    );
}

export default NewUser;