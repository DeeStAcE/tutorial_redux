export const selectProduct = (state, limit) => {
    if (limit === 'all') {
        return state
    }

    return state.filter(product => product.price <= Number(limit))
}

export const sum = (state) => {
    return state.reduce((p, n) => p + Number(n.price), 0)
}