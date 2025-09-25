import React, { useState } from "react";
import { Ligne } from "./Ligne";

export function Table() {
    const [lignes, setLignes] = useState([""]);

    const handleLigneChange = (index, value) => {
        const nouvellesLignes = [...lignes];
        nouvellesLignes[index] = value;
        setLignes(nouvellesLignes);

        if (index === lignes.length - 1 && value.trim() !== "") {
            setLignes([...nouvellesLignes, ""]);
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Text</th>
                    <th scope="col">Bool</th>
                    <th scope="col">Auto Complet</th>
                    <th scope="col">Select</th>
                </tr>
            </thead>
            <tbody>
                {lignes.map((texteLigne, index) => (
                    <Ligne
                        key={index}
                        initialText={texteLigne}
                        onTextChange={(value) => handleLigneChange(index, value)}
                        isLastLine={index === lignes.length - 1}
                    />
                ))}
            </tbody>
        </table>
    );
}