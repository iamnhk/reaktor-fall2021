import React from "react";

function TableOfContent({ chapters }) {
    return (
        <div className=" max-h-screen overflow-auto">
            <h2 className="text-center text-blue-900 text-xl font-serif font-extrabold">Table of Contents</h2>
            <ul className="divide-y divide-gray-100">
                {chapters.map((chapter) => (
                    <li
                        onClick={() => console.log("clicked")}
                        key={chapter.id}
                        className="p-3 hover:bg-blue-400 hover:text-blue-100 cursor-pointer"
                    >
                        {chapter.id + " " + chapter.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TableOfContent;
