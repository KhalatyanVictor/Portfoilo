import { useState } from "react";

function Header({ addTodo, searchInput, setSearchInput }) {
    const [input, setInput] = useState("");

    function handleAddClick() {
        addTodo(input); 
        setInput("");
    }



    return (
        <div>
            <h1 className="headerText">To Do List</h1>
            <div className="inputButtonDiv">
                <input
                    id="inputId"
                    type="text"
                    placeholder="Add Todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button onClick={handleAddClick} className="addButton">Add</button>
            </div>
            <div className="searchInputDiv">
                <input
                    id="inputId"
                    type="text"
                    placeholder="Search Todo"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} 
                />
            </div>
        </div>
    );
    
}

export default Header;