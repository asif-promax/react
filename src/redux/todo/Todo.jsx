import React, { useState } from 'react';

const Todo = () => {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);

    // Handle input change
    const handleChange = (event) => {
        setInput(event.target.value);
    };

    // Add item to the list
    const storeItems = (event) => {
        event.preventDefault();
        if (input.trim()) {
            setItems([...items, input]); // Add the new item to the list
            setInput(''); // Clear the input field after adding
        }
    };

    // Delete a specific item
    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className="inline-block shadow-sm bg-slate-500 p-5">
            <h1 className="text-xl font-bold mb-4 text-white">Todo App</h1>
            {/* Input Form */}
            <form onSubmit={storeItems}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    className="border rounded-md px-2 py-1 mr-2"
                    placeholder="Add a task..."
                />
                <button
                    type="submit"
                    className="bg-gray-800 text-white rounded-md px-3 py-2 hover:bg-gray-700"
                >
                    Add
                </button>
            </form>

            {/* Display the todo list */}
            <ul className="mt-5 text-white">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center mt-2 bg-gray-700 px-3 py-2 rounded-md"
                    >
                        <span>{item}</span>
                        <button
                            onClick={() => deleteItem(index)}
                            className="bg-red-600 text-white rounded-md px-2 py-1 hover:bg-red-500"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
