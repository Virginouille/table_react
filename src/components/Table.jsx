import { useState } from "react";
import { Ligne } from "./Ligne";

export function Table() {
    const [text, setText] = useState("");
    const [showLine, setShowLine] = useState(false);

    function handleChange(e) {
        const value = e.target.value;
        setText(value);
        setShowLine(value.trim() !== "");
    }

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
                <tr>
                    <td className="w-50">
                        <input
                            type="text"
                            className="bg-white text-secondary"
                            value={text}
                            onChange={handleChange}
                            placeholder="lorem"
                        />
                        <span className="ms-2">
                            {text.trim() === "" ? "Vide" : "Rempli"}
                        </span>
                    </td>
                    <td className="w-50">
                        <select className="form-select">
                            <option value="1">Oui</option>
                            <option value="2">Non</option>
                        </select>
                    </td>
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
                    <td>
                        <select className="form-select" label="3/3">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </td>
                </tr>

                {/* Ligne affichée seulement si le champ n'est pas vide */}
                {showLine && <Ligne />}
            </tbody>
        </table>
    );
}
