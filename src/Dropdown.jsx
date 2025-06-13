import React, { useState } from 'react';

export default function Dropdown() {
    const person = [
        {
            name: "Sivaraman",
            age: 22,
            Skills: ["HTML", "CSS", "JS", "React", "Express", "Node.js", "MongoDB", "TailwindCSS"]
        },
        {
            name: "Jennifer",
            age: 22,
            Skills: ["Java", "Html"]
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState("");

    const handleChange = (e) => {
        setSelectedIndex(e.target.value);
    };

    const selectedPerson = person[selectedIndex];

    return (
        <div>
            <select onChange={handleChange} value={selectedIndex}>
                <option value="">Select a person</option>
                {person.map((data, index) => (
                    <option key={index} value={index}>{data.name}</option>
                ))}
            </select>

            {selectedPerson && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Name: {selectedPerson.name}</h3>
                    <p>Age: {selectedPerson.age}</p>
                    <p>Skills:</p>
                    <ul>
                        {selectedPerson.Skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
