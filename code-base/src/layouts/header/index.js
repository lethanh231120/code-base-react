import React, { useSelector,useState } from 'react'
import { Menu, Modal, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.min.css'
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
  const [isModalSignin, setIsModalSignin] = useState(false)
  const [isModalSignup, setIsModalSignup] = useState(false)
  const { user, isAuthenticated } = useSelector(state => state.userInfo)

  const onClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <>
      <Layout className='header'>
        <Header
          style={{
            padding: '0 5%',
            // backgroundColor: '#000',
            colorButton: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className='logo' style={{ fontSize: '20px', fontWeight: '500' }}>DECENSPACE</div>
            <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
          </div>
          {isAuthenticated ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '250px' }}>
            <Typography
              component='span'
              variant='subtitle1'
              fontWeight='bold'
            >
              <NavLink className='header__link' to='profile'>
                {({ isActive }) => (
                  <div
                    component='span'
                    className={isActive ? 'activeClassName' : ''}
                    style={{ color: '#fff' }}
                  >
                    {user && user.first_name}{user && user.last_name}
                  </div>
                )}
              </NavLink>
            </Typography>
            <Typography
              variant='subtitle1'
              // onClick={() => setIsOpen(true)}
              className='header__link'
              style={{ color: '#fff' }}
            >
              Change Password
            </Typography>
            <Typography
              variant='subtitle1'
              // onClick={logout}
              className=' header__link'
              style={{ color: '#fff' }}
            >
              Logout
            </Typography>
          </div>
            : <div style={{ display: 'flex', alignItems: 'center', width: '150px', justifyContent: 'space-around ' }}>
              <Typography style={{ color: '#fff' }} onClick={() => setIsModalSignin(true)}>
                Đăng nhập
              </Typography>
              <Typography style={{ color: '#fff' }} onClick={() => setIsModalSignup(true)}>
                Đăng ký
              </Typography>
            </div>}
        </Header>
      </Layout>
      <Modal
        visible={isModalSignin}
        onOk={() => setIsModalSignin(false)}
        onCancel={() => setIsModalSignin(false)}
      >
        <SignIn setIsModalSignin={setIsModalSignin}/>
      </Modal>
      <Modal
        visible={isModalSignup}
        onOk={() => setIsModalSignup(false)}
        onCancel={() => setIsModalSignup(false)}
      >
        <Signup setIsModalSignup={setIsModalSignup}/>
      </Modal>
    </>
  )
}
export default Navbar
