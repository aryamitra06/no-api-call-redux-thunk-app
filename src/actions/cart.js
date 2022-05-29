export const addToCart = (state) => (dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: state });
};

export const removeFromCart = (state) => (dispatch) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: state });
};