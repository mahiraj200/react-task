import React, { useState } from "react";

import { Button, Checkbox, Form, Input } from 'antd';
//import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddItems = () => {
  let history = useHistory();
  const [user, setUser] = useState({
      key: '7',
      name: 'Mobile',
      price: 3200,
      id: '12344543',
      quantity: '20',
  });
  
  const { key, name, price, id, quantity } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user, 'user')
    console.log(e.target, '')
 ///   localStorage.setItem('productData', user);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
   localStorage.setItem('productData', JSON.stringify(values));
       history.push("/home");


  };
  const onSubmit = e => {
    // e.preventDefault();
    console.log('==E12', e.target)
    //await axios.post("http://localhost:3003/users", user);
    // history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New Product</h2>
        {/* <form onFinish={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="price"
              name="price"
              // value={}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Id"
              name="id"
              // value={'id'}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Product Quantity"
              name="quantity"
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div> 
          <button type="primary" htmlType="submit">Add Product</button>
        </form> */}
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your product Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="price"
        name="price"
        rules={[{ required: true, message: 'Please input your price!' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="quantity"
        name="quantity"
        rules={[{ required: true, message: 'Please input your quantity!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="id"
        name="id"
        rules={[{ required: true, message: 'Please input your id!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
};

export default AddItems;
