import React from "react";
import { TableBeliever } from "./TableBeliever";

export const Believers = () => {
    return (
        <div className="flex flex-col items-center mt-8 min-h-screen w-full bg-gray-100">
                <div className="flex items-center justify-between w-full max-w-[1300px] p-6 bg-white">
                    <h2 className="text-4xl font-bold mb-4">Creyentes</h2>
                    <button className="bg-gray-800 px-6 py-2 rounded-4xl text-gray-100 cursor-pointer hover:scale-110 transition-all">Nuevo creyente</button>
                </div>
                <TableBeliever/>
        </div>
    );
}