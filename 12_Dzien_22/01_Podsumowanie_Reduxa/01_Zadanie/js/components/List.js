import React from "react";

const List = ({counter, list, onSave}) => {
    return (
        <div>
            <button onClick={() => onSave(counter)}>ZAPISZ</button>
            <ul>
                {list.map((element, index) => {
                    return <li key={index}>{element}</li>
                })}
            </ul>
        </div>
    )
}

export default List