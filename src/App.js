import React from 'react';
import './App.css';
import { Layout } from 'antd';
import NavHeader from './components/header';
import NavSlider from './components/slider';
import NavContent from './components/content';
import NavFooter from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
      <Sider style={{background: 'white', height: '130px'}}><NavSlider/></Sider>
      <Layout>
        <Header style={{height: '45px'}} className="bg-light"><NavHeader/></Header>
        <Content style={{height: '43px'}} className='bg-light mb-1'><NavContent/></Content>
        <Content style={{height: '47px'}} className='bg-dark'><NavFooter/></Content>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
