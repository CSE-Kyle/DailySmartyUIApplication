import {
    SET_RECENT_POSTS
} from '../actions/types'; // getting access to actions

const INIT_STATE = {
    posts: [], // fetching for posts
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) { // determining which action you're hitting
        case SET_RECENT_POSTS:
            const recentPosts = action.payload; // connected to payload within index.js file (actions); being dispatched
            return {...state, recentPosts};
    
        default:
            return state;
    }
}