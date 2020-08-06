// import {DISHES} from '../shared/dishes';
import * as ActionTypes from './ActionTypes';


export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMessage: 'null'.payload, dishes: action.payload}
            
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMessage: null, dishes: []}
                  
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMessage: action.payload, dishes: []}
        
        default: 
            return state;
    }
}