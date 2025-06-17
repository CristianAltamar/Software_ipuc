import React from 'react';
import { useState, useEffect } from 'react';
import { EditBeliever } from './EditBeliever';

const headerBelievers = ["Nombre", "Apellido", "Fecha de Nacimiento", "Fecha de Bautismo", "Acciones"];

const believersData = [
    {
        firstName: "Juan",
        lastName: "Pérez",
        birthDate: "1990-01-01",
        baptismDate: "2020-01-01",
        isEditing: false
    },
    {
        firstName: "María",
        lastName: "Gómez",
        birthDate: "1985-05-15",
        baptismDate: "2019-06-20",
        isEditing: false
    },
    {
        firstName: "Carlos",
        lastName: "López",
        birthDate: "2000-10-10",
        baptismDate: "2021-11-11",
        isEditing: false
    }
];



export const TableBeliever = () => {
    const [believers, setBelievers] = useState(believersData);

    const handleEditing = (index) => {
        // Actualización del estado para alternar el modo de edición del creyente seleccionado
        const updatedBelievers = believers.map((believer, i) => {
            if (i === index) {
                return { ...believer, isEditing: !believer.isEditing };
            }
            return believer;
        });
        setBelievers(updatedBelievers);

        //Toggle the contenteditable attribute for the selected believer row
        const believerToEdit = document.querySelectorAll('tr')[index + 1]; // +1 to skip header row
        believerToEdit.children[0].toggleAttribute('contenteditable');
        believerToEdit.children[1].toggleAttribute('contenteditable');
        believerToEdit.children[2].toggleAttribute('contenteditable');
        believerToEdit.children[3].toggleAttribute('contenteditable');
    }

    return (
            <>
                <table className="w-full bg-white shadow-md overflow-hidden max-w-[1300px]">
                <thead> 
                    <tr className="bg-gray-800 text-white">
                        {headerBelievers.map((header, index) => (
                            <th key={index} className="px-6 py-3 text-left">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {believersData.map((believer, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                            <td className="px-6 py-4">{believer.firstName}</td>
                            <td className="px-6 py-4">{believer.lastName}</td>
                            <td className="px-6 py-4">{believer.birthDate}</td>
                            <td className="px-6 py-4">{believer.baptismDate}</td>
                            <td className="px-6 py-4">
                                <button 
                                    className="text-blue-600 cursor-pointer hover hover:text-blue-800 "
                                    onClick={() => handleEditing(index)}
                                >{believer.isEditing ? "Guardar" : "Editar"}</button>
                                <button className="text-red-600 cursor-pointer hover:text-red-800 ml-4">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
    );
}