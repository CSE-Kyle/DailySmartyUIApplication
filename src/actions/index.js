import {SET_RECENT_POSTS} from './types';
import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        // perform request in here
        // console.log('hello'); // ensuring redux-thunk is working correctly

        axios.get("https://api.dailysmarty.com/posts")
            .then(response => {
                console.log(response.data.posts); // seeing all posts within console
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts
                })
            })
    }
}