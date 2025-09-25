import React, { useState } from "react";
import { Ligne } from "./Ligne";

const initialLigneData = {
    text: "",
    selectBool: "1",
    selectChoix: "1"
};

export function Table() {
    const [lignes, setLignes] = useState([initialLigneData]);

    const handleLigneChange = (index, name, value) => {
        const nouvellesLignes = [...lignes];

        nouvellesLignes[index] = {
            ...nouvellesLignes[index],
            [name]: value
        };

        //Ajout nouvelle ligne
        setLignes(nouvellesLignes);

        if (index === lignes.length - 1) {

            const ligneActuelle = nouvellesLignes[index];

            const isLigneFilled =
                ligneActuelle.text.trim() !== "" ||
                ligneActuelle.selectBool !== initialLigneData.selectBool ||
                ligneActuelle.selectChoix !== initialLigneData.selectChoix;

            if (isLigneFilled) {
                setLignes([...nouvellesLignes, initialLigneData]);
            }
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
                {lignes.map((ligneData, index) => (
                    <Ligne
                        key={index}
                        ligneData={ligneData}
                        onDataChange={(name, value) => handleLigneChange(index, name, value)}
                    />
                ))}
            </tbody>
        </table>
    );
}