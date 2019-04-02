import { combineReducers } from "redux";
import cuid from 'cuid';

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer
});
 
export default rootReducer;
export const cuidFn = cuid;

function restaurantsReducer(state = [], action) {
    // console.log(action)
    switch(action.type){
        case 'ADD_RESTAURANT': 

            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return state.concat(restaurant)

        case 'EDIT_RESTAURANT':

            return state.map(res => {
                if(res.id === action.restaurant.id){
                    return action.restaurant
                }else{
                    return res
                }
            })

        case 'DELETE_RESTAURANT':

            return state.filter(res => res.id !== action.id )

        default:
            return state
    }

}

function reviewsReducer(state = [], action) {
    // console.log(action)
    switch(action.type){
        case 'ADD_REVIEW': 

            const review = {
                text: action.review.text,
                restaurantId: action.review.restaurantId,
                id: cuidFn() 
            };
            return state.concat(review)

        case 'EDIT_REVIEW':

        return state.map(review => {
            if(review.id === action.review.id){
                return action.review
            }else{
                return review
            }
        })

        case 'DELETE_REVIEW':

            return state.filter(review => review.id !== action.id )

        default:
            return state
    }

}
