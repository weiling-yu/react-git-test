// import {data}




//Reducer is a pure function that takes current state and action, and return a new state. 

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    isModalOpen: false
};

export const Reducer = (state = initialState, action) => {
    return state;
}