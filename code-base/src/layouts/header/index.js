import React, { useState } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
const { Header } = Layout

const items = [
  {
    label: (<NavLink className='header__link' to='/'>Home</NavLink>),
    key: 'home'
    // icon: <MailOutlined />
  },
  {
    label: (<NavLink className='header__link' to='portfolio'>Portfolio Tracker</NavLink>),
    key: 'portfolio'
  },
  {
    label: (<NavLink className='header__link' to='swap'>Swap</NavLink>),
    key: 'swap'
  },
  {
    label: (
      <NavLink className='header__link' to='price'>Pricing</NavLink>
    ),
    key: 'pricing'
  },
  {
    label: (
      <NavLink className='header__link' to='blog'>Blog</NavLink>
    ),
    key: 'blog'
  }
]

const Navbar = () => {
  const [current, setCurrent] = useState('blog')

  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <Layout className='header'>
      <Header
        style={{
          padding: '0 5%',
          // backgroundColor: '#000',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className='logo' style={{ fontSize: '20px', fontWeight: '500' }}>DECENSPACE</div>
          <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
        </div>
      </Header>
    </Layout>
  )
}
export default Navbar
