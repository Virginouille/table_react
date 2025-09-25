import { useState } from "react";

export function Ligne() {
    const [text, setText] = useState("");

    return (
        <tr>
            <td className="w-50">
                <input
                    type="text"
                    className="bg-white text-secondary"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="lorem"
                />
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
    );
}
