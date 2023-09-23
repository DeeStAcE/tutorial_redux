import React from "react";

const RecipeDetails = ({recipe, products}) => {

    const recipeDetails = recipe[0]
    const productList = []

    recipeDetails.products.forEach(id => {
        products.forEach(product => {
            if (product.id === id) {
                productList.push(product)
            }
        })
    })

    return (
        <>
            <h1>{recipeDetails.name}</h1>
            <h2>{recipeDetails.desc}</h2>
            <h3>Lista produktów:</h3>
            <ul>
                {productList.map(product => <li key={product.id}>{product.name}</li>)}
            </ul>
        </>
    )
}

export default RecipeDetails