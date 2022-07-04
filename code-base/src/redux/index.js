import { combineReducers } from '@reduxjs/toolkit'

import blogSlice from './blogSlice'

export default combineReducers({
  blogs: blogSlice
})
