import React from "react";

const List = ({counter, list, onSave, onDelete}) => {
    return (
        <div>
            <button onClick={() => onSave(counter)}>ZAPISZ</button>
            <ul>
                {list.map((element, index) => {
                    return <li key={index} onClick={() => onDelete(index)}>{element}</li>
                })}
            </ul>
        </div>
    )
}

export default List