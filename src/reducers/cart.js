const addtocart = (initial = 0, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const cartValueAdded = initial + action.payload;
            return cartValueAdded;
        case 'REMOVE_FROM_CART':
            const cartValueRemoved = initial - action.payload;
            return cartValueRemoved;
        default:
            return initial;
    }
}

export default addtocart;