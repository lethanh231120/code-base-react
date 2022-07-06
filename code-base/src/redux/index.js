import { combineReducers } from '@reduxjs/toolkit'

import blogSlice from './blogSlice'
import userInfo from './useInfo'
export default combineReducers({
  blogs: blogSlice,
  userInfo: userInfo
})
