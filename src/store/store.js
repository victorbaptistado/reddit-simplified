import { configureStore } from '@reduxjs/toolkit'
import redditReducer from './redditSlice'
import subredditReducer from './subRedditSlice'

const store = configureStore({
    reducer: {
        reddits: redditReducer,
        subredditReducer: subredditReducer
    }
})

export default store