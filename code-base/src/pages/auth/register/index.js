import React, { useState } from 'react'
import { Button, Form, Input, Image } from 'antd'
import { post } from '../../../api/BaseRequest'

const layout = {
  labelCol: {
    span: 8
  }
}
export const Signup = () => {
  const [message, setMessage] = useState()
  const [error, setError] = useState()
  const [image, setImage] = useState()
  const [open, setOpen] = useState(false)

  const onFinish = async(values) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
      }
    }
    try {
      const formData = new FormData()
      Object.keys(values).forEach(key => formData.append(`${key}`, values[key]))
      formData.append('image', image)
      formData.append('isAdmin', false)
      await post('users', formData, config)
      setMessage('Đăng ký thành công! Kiểm tra email của bạn để lấy thông tin đăng nhập')
      setOpen(true)
    } catch (error) {
      error?.response?.data && setError(error.response.data.message)
    }
  }

  return (
    <Form {...layout} name='nest-messages' onFinish={onFinish} >
      {message && message}
      {open && open}
      <div>
        <Image
          width={200}
          src={image ? (URL.createObjectURL(image)) : '/images/user.png'}
        />
      </div>
      <div>
        <Input
          type='file'
          onChange={(e) => setImage(e.target.files[0])}
        //   style={{ display: 'none' }}
        />
      </div>
      <Form.Item
        name={['user', 'name']}
        label='Name'
        rules={[
          {
            required: true,
            message: 'Please input your name!'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label='Email'
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Please input your email!'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'phone']}
        label='Phone'
        rules={[
          {
            required: true,
            pattern: new RegExp('((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$'),
            message: 'Format is wrong'
          }
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name={['user', 'address']}
        label='Addres'
        rules={[
          {
            required: true,
            message: 'Please input your address!'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'password']}
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
      {error && error}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
