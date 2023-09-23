import React from "react";
import PropTypes from "prop-types";

const user = ({firstName, lastName, onClick, age}) => {
    return (
        <>
            <h1>Cześć {firstName} {lastName}</h1>
            {age && (
                <div>
                    Masz {age} lat
                </div>
            )}
            <button onClick={onClick}>Przycisk</button>
        </>
    )
}

user.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    age: PropTypes.number.isRequired
}

export default user