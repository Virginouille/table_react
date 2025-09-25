import React, { useState } from "react";
import { Ligne } from "./Ligne";

const initialLigneData = {
    text: "",
    selectBool: "1",
    selectChoix: "1",
    selectedBadges: []
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
                ligneActuelle.selectChoix !== initialLigneData.selectChoix ||
                ligneActuelle.selectedBadges.length > 0;

            if (isLigneFilled) {
                setLignes([...nouvellesLignes, initialLigneData]);
            }
        }
    };

    //Fonction de suppression d'une ligne
    const handleLigneDelete = (indexToDelete) => {
        const nouvellesLignes = lignes.filter((_, index) => index !== indexToDelete);
        if (nouvellesLignes.length === 0) {
            setLignes([initialLigneData]); // Garde toujours au moins une ligne vide
        } else {
            setLignes(nouvellesLignes); // Mettre à jour l'état avec le nouveau tableau
        }
    }

    //Fonction pour ajouter un badge sur une ligne
    const handleBadgesChange = (index, newBadgesArray) => {

        //coPIE du tableau de lignes
        const nouvellesLignes = [...lignes];

        //Copie de l'object ligne 
        nouvellesLignes[index] = {
            ...nouvellesLignes[index],
            selectedBadges: newBadgesArray
        };


        //Mise à jour de l'état du tableau avec le nouvel object ligne
        setLignes(nouvellesLignes);

        if (index === lignes.length - 1 && newBadgesArray.length > 0) {
            setLignes([...nouvellesLignes, initialLigneData]);
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
                        onDelete={() => handleLigneDelete(index)}
                        onBadgesChange={(newBadgesArray) => handleBadgesChange(index, newBadgesArray)}
                    />
                ))}
            </tbody>
        </table>
    );
}