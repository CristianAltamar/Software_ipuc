import React from "react";

export const EditBeliever = (believer) => {
    return (
        <div className="p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Believer</h2>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 grid grid-rows-2 grid-flow-col justify-between items-center gap-1">
                    <label className=" text-gray-700 text-sm font-bold" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={believer.name}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label className="text-gray-700 text-sm font-bold" htmlFor="Apellido">
                        Apellido
                    </label>
                    <input
                        type="text"
                        id="Apellido"
                        value={believer.Apellido}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4 grid grid-rows-2 grid-flow-col items-center justify-center gap-1">
                    <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                        Fecha de Nacimiento
                    </label>
                    <input
                        type="date"
                        id="fechaNacimiento"
                        value={believer.fechaNacimiento}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                        Fecha de bautiso
                    </label>
                    <input
                        type="date"
                        id="fechaBautismo"
                        value={believer.fechaBautismo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}