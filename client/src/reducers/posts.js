import {CREATE,UPDATE,DELETE,FETCH_ALL,LIKE} from "../constants/actionTypes";
export default (posts = [], action) => {//state as posts
    switch (action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
        case LIKE:
            return posts.map((post) => (post.Id === action.payload.Id ? action.payload : post));
        case DELETE:
            return posts.filter((post) => (post.Id !== action.payload));
        default:
            return posts;
    }

}