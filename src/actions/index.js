export function addRestaurant(state){
    return {
        type: 'ADD_RESTAURANT',
        text: state.text
    }
}

export function editRestaurant(res){
    return {
        type: 'EDIT_RESTAURANT',
        restaurant: res
    }
}

export function deleteRestaurant(id){
    return{
        type: 'DELETE_RESTAURANT',
        id: id
    }
}

export function addReview(state){
    return {
        type: 'ADD_REVIEW',
        review: state
    }
}
export function editReview(review){
    return {
        type: 'EDIT_REVIEW',
        review
    }
}

export function deleteReview(id) {
    return {
        type: 'DELETE_REVIEW',
        id: id
    }
}