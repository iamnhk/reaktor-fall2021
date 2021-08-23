import React from "react";
import { useState, useEffect } from "react";
import { getChapters, getRules } from "./parseData";

import Header from "./components/Header";
import TableOfContent from "./components/TableOfContent";
import Content from "./components/content/Content";

function App() {
    const [chapters, setChapters] = useState([]);
    const [rules, setRules] = useState([]);

    useEffect(() => {
        const uri = `https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt`;
        fetch(uri)
            .then((res) => res.text())
            .then(
                (text) => {
                    setRules(getRules(text));
                    setChapters(getChapters(text));
                },
                (error) => {
                    console.log("i am error");
                }
            );
    }, []);

    return (
        <div className="grid grid-rows-6 h-screen">
            <div
                className="row-span-1 w-screen 
                        bg-gray-100 
                        border-gray-300 border-solid p-2 m-2 rounded shadow-lg"
            >
                <Header title="Rules" />
            </div>
            <div className="row-span-4 w-screen ">
                <div className="grid grid-cols-12 gap-2 ">
                    <nav
                        className="col-span-3 
                            bg-gray-100 
                            border-gray-300 border-solid p-4 m-4 rounded shadow-lg"
                    >
                        <TableOfContent chapters={chapters} />
                    </nav>

                    <div
                        className="col-span-9
                                bg-gray-100 
                                border-gray-300 border-solid p-4 m-4 rounded shadow-lg"
                    >
                        <Content rules={rules} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
