import React from 'react'
import Blogs from '../pages/blog'
import Header from './header'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home'
import PortfolioPage from '../pages/portfolio'
import SwapPage from '../pages/swap'
import Cryptocurrencies from '../pages/cryptocurrencies'
import PricingPage from '../pages/price'
import { Layout } from 'antd'
import './header/index.scss'
const { Content } = Layout
const Router = () => {
  return (
    <>
      <Header/>
      <Content>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='portfolio' element={<PortfolioPage />} />
          <Route path='swap' element={<SwapPage />} />
          <Route path='cryptocurrencies' element={<Cryptocurrencies />} />
          <Route path='price' element={<PricingPage />} />
          <Route path='blog' element={<Blogs />} />
        </Routes>

      </Content>
    </>
  )
}

export default Router
