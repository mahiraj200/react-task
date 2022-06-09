import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "antd/lib/transfer/search";
import { Input, Popconfirm,  } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import {  Popover } from 'antd';

import { Card } from 'antd';
import { Link, useHistory } from "react-router-dom";
import '../Home/home.css'


const Home = () => {
  const history = useHistory()
  const [searchInput, setSearchInput] = useState('');
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);


  const products = localStorage.getItem('productData');
  console.log('====', products)
  let productARR = products && Object.keys(products).length > 0 && JSON.parse(products);
  const [filteredResults, setFilteredResults] = useState([]);
   
  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
}
 
const data = [
  {
    key: '1',
    name: 'Mobile',
    price: 3200,
    id: '12344543',
    quantity: '20',
  },
  {
    key: '2',
    name: 'television',
    price: 10000,
    id: '4324234234234',
    quantity: '30',
  },
  {
    key: '3',
    name: 'laptop',
    price: 800000,
    id: '23123123',
    quantity: '5',
  },
  {
    key: '4',
    name: 'Mobile',
    price: 3200,
    id: '12344543',
    quantity: '20',
  },
  {
    key: '5',
    name: 'television',
    price: 10000,
    id: '4324234234234',
    quantity: '30',
  },
  {
    key: '6',
    name: 'laptop',
    price: 800000,
    id: '23123123',
    quantity: '5',
  },
  {
    key: '7',
    name: 'Mobile',
    price: 3200,
    id: '12344543',
    quantity: '20',
  },
  {
    key: '8',
    name: 'television',
    price: 10000,
    id: '4324234234234',
    quantity: '30',
  },
  {
    key: '9',
    name: 'laptop',
    price: 15000,
    id: '23123123',
    quantity: '5',
  },
  {
    key: '10',
    name: 'Mobile',
    price: 30000,
    id: '12344543',
    quantity: '20',
  },
  {
    key: '11',
    name: 'television',
    price: 35000,
    id: '4324234234234',
    quantity: '30',
  },
  {
    key: '12',
    name: 'laptop',
    price: 40000,
    id: '23123123',
    quantity: '5',
  },
];
const [deleteValue, SetDeleteValue] = useState(data);

let DeleteARA = [];


productARR && data.push(productARR);

const deleteProduct = (deleteProduct) =>
{
  const newData = deleteValue.filter((item) => item.key !== deleteProduct.key);
  SetDeleteValue(newData);
}

  const columns = [
    {
      title: 'No.',
      dataIndex: 'key',
      //@ts-ignore
      render: (x, y, index) => index + 1
    },

    {
      title: ' Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      
    },
    {
      title: 'Product Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        data.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => deleteProduct(record)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null

  //       <Space size="middle">
  //           <Popover  title="Title">
  //   <Button type="primary">Hover me</Button>
  // </Popover>
  //         <a onClick={() => deleteProduct(record)}>DELETE <DeleteOutlined /></a>
  //       </Space>
      )
    },
  ];
  
  return (
    <div className="container">
      <div className="py-4">
        <h1>HOME PAGE</h1>
        <div className="table-search-bar ">
          <div>

          <Input
           placeholder="Search"
           onChange={(e) => searchItems(e.target.value)}
           
           />
           </div>
           <div>
             
              <Button
              onClick={() => history.push('/users/add')} 
              type="primary
              ">Add Items
              </Button>
          {/* <SearchOutlined /> */}
           </div>
         </div>
         <Card className='table-card'>
        <Table
        className="item-data-table" 
        columns={ columns} 
        dataSource={ searchInput.length > 1 ? filteredResults : deleteValue}
        pagination={{
          current:page,
          pageSize:pageSize,
          total: data.length,
          onChange:(page, pageSize) => {
            setPage(page)
            setPageSize(pageSize);
          }
        }}

        />
        </Card>
      </div>
    </div>
  );
};

export default Home;
