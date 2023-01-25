import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/pics/',
  };

const options = {
    name: 'reddit',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        startGetPost(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload 
        },
        getPostsFailed(state, action) {
            state.isLoading = false;
            state.error = true;
        },
    }        
}

const redditSlice = createSlice(options);
                
export const { 
    setPosts,
    startGetPost,
    getPostsSuccess,
    getPostsFailed, 
} = redditSlice.actions;
export default redditSlice.reducer