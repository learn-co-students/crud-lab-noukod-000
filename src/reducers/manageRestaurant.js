
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={ restaurants: [], reviews: [] }, action) {
    console.log(action);
    switch (action.type) {
      case 'ADD_RESTAURANT':

        const resto = {
          id: cuid(),
          text: action.text
        }
        return { ...state, restaurants: state.restaurants.concat(resto) };

      case 'DELETE_RESTAURANT':

        return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.restoId)}

      case 'ADD_REVIEW':

        const review = {
          id: cuid(),
          restaurantId: action.review.restaurantId,
          text: action.review.text
        }
        return { ...state, reviews: state.reviews.concat(review) };

      case 'DELETE_REVIEW':

        return { ...state, reviews: state.reviews.filter(review => review.id !== action.reviewId) };

      default:
        return state;
    }

}
