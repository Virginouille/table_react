import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";

//Auto omplete avec material ui
export function AutoCompleteInput({ onBadgesChange, selectedBadges }) {

    //Liste option pour test
    const options = ['test1', 'test 2', 'bla', 'gttgt'];

    const handleSelect = (event, newValue) => {
        if (onBadgesChange) {
            onBadgesChange(newValue);
        }
    };

    return (
        <Autocomplete
            multiple
            disablePortal
            options={options}
            value={selectedBadges}
            sx={{ width: '100%' }}
            onChange={handleSelect}
            renderInput={(params) => <TextField {...params} label="Badge" />}
        />
    );
}










//Capturer la saisie
//Filtrer les suggestions (faire un tableau avec des suggestions pour test)
//Afficher sous forme de badges  + entrer pour valider(badges dynamiques ajoutés au fur et à mesure)
//Interaction avec les badges supprimer au clic dessus

