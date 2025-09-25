import React from "react";

// Le composant reçoit la valeur et le callback du parent
export function Ligne({ ligneData, onDataChange, onDelete }) {

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
                <div className="row">
                    <div
                        style={{ gridTemplateColumns: "1fr 1fr" }}
                        className=" col mb-3 d-flex d-grid gap-3"
                    >
                        <h6>
                            <span className="p-2 badge text-bg-secondary">Test 1</span>
                        </h6>
                        <h6>
                            <span className="p-2 badge text-bg-secondary">Test 2</span>
                        </h6>
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