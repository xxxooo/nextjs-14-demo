import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import BreadcrumbItem  from 'antd/es/breadcrumb/BreadcrumbItem';

import DummyContent from '@/components/DummyContent';

import styles from './page.module.scss';


const items = new Array(11).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>List</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb>
        <div
          style={{
            minHeight: 280,
            padding: 24,
            background: '#fff',
            borderRadius: '8px',
          }}
        >
          <DummyContent />
          <DummyContent />
          <DummyContent />
          <DummyContent />
          <DummyContent />
          <DummyContent />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant Copy
      </Footer>
    </Layout>
  );
};

export default App;