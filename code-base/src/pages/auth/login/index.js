import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { post } from '../../../api/BaseRequest'
import { setCookie, STORAGEKEY } from '../../../utils/storage'
import { useDispatch } from 'react-redux'
import { getUserInfo } from '../../../redux/useInfo'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
export default function SignIn({ setIsModalVisible }) {
  const [error, setError] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    reset
  } = useForm({
    mode: 'onChange'
  })
  const onFinish = async(values) => {
    try {
      const data = await post('user/login', values)
      reset()
      if (data.token) {
        await setCookie(STORAGEKEY.ACCESS_TOKEN, data.token)
        await dispatch(getUserInfo())
        setIsModalVisible(false)
        if (data.isAdmin === true) {
        //   navigate('../admin')
        } else {
          navigate('../')
        }
      }
    } catch (error) {
      error?.response?.data && setError(error.response.data.message)
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Form
        name='basic'
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        initialss={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >

        <Form.Item
          label='email'
          name='email'
          rules={[
            {
              required: false,
              type: 'email',
              message: 'Enter a valid email address!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
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
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
