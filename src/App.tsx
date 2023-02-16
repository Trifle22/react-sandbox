import ConfigProvider from 'antd/es/config-provider';
import theme from 'antd/es/theme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.css'
import {Layout} from './Layout';
function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className='root'>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>      
    </ConfigProvider>
  );
}

export default App;
