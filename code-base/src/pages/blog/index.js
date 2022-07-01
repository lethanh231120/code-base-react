import React, { useEffect } from 'react'
import { getBlogs } from '../../redux/blogSlice'
import { useDispatch, useSelector } from 'react-redux'

const Blogs = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector(state => state.blogs)

  useEffect(() => {
    dispatch(getBlogs({ page: 1, pageSize: 2 }))
  }, [])

  console.log(blogs)
  return (
    <div>index</div>
  )
}
export default Blogs
