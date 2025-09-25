import React from "react";
import { AutoCompleteInput } from "./AutoCompleteInput";


// Le composant reçoit la valeur et le callback du parent
export function Ligne({ ligneData, onDataChange, onDelete, onBadgesChange, onBadgeRemove }) {

    //// Fonction générique pour gérer tous les changements texte /select
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Envoie la nouvelle valeur au parent Table
        onDataChange(name, value);
    };

    return (
        <tr>
            {/*Zone texte*/}
            <td className="w-50">
                <input
                    type="text"
                    className="bg-white text-secondary"
                    name="text"
                    value={ligneData.text}
                    onChange={handleChange}
                    placeholder="lorem"
                />
            </td>
            {/*Zone select bool*/}
            <td className="w-50">
                <select className="form-select"
                    name="selectBool"
                    value={ligneData.selectBool}
                    onChange={handleChange}>

                    <option value="1">Oui</option>
                    <option value="2">Non</option>
                </select>
            </td>

            {/*Zone badge auto-complete*/}
            <td className="container">
                <AutoCompleteInput
                    onBadgesChange={onBadgesChange}
                    selectedBadges={ligneData.selectedBadges} />

                <div className="row mt-2">
                    <div className="col mb-3 d-flex d-grid gap-3">
                        {ligneData.selectedBadges && ligneData.selectedBadges.map((badge, index) => (
                            <h6 key={index}>
                                <span className="p-2 badge text-bg-secondary d-flex align-items-center">
                                    {badge}
                                    <i
                                        className="bi bi-x ms-2"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => onBadgeRemove(badge)}
                                    ></i>
                                </span>
                            </h6>
                        ))}
                    </div>
                </div>
            </td>

            {/*Zone select choix*/}
            <td>
                <select className="form-select"
                    label="3/3"
                    name="selectChoix"
                    value={ligneData.selectChoix}
                    onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </td>

            {/*Zone delete*/}
            <td>
                <button className="btn btn-secondary btn-sm"
                    onClick={onDelete}>
                    <i className="bi bi-x-circle"></i>
                </button>
            </td>
        </tr>
    );
}