import React from 'react'
import Table from '../components/table'
import Blogs from '../pages/blog'
import Header from './header'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home'

const Router = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='table' element={<Table />} />
      </Routes>
    </>
  )
}

export default Router
