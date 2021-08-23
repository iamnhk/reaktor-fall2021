import React from "react";
function Content({ rules }) {
    return (
        <>
            <h2 className="text-left text-blue-900 text-xl font-serif font-extrabold">Rules</h2>
            <ul className="divide-y divide-gray-100">
                {rules.map((rules) => (
                    <li key={rules.id} className="p-3 ">
                        {rules.id + " " + rules.content}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Content;
