import React, { useState } from 'react';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import Link from 'next/link';

import {
  HomeOutlined, //홈 아이콘 추가
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const A = styled.a`
  width: 100%;
`;

const menuRouter = (router, href) => () => {
  router.push(`/${href}`);
};

const MainMenu = ({ visible }) => {
  const [isFold, setFold] = useState(true);
  const router = useRouter();
  const handleMouseEnter = (e) => {
    setFold(true);
  };

  const handleMouseLeave = (e) => {
    setFold(false);
  };

  return (
    <div
      style={{
        zIndex: 100,
        position: 'absolute',
        top: '50px',
        width: 256,
      }}
    >
      {visible ? (
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={[]}
          mode="inline"
          theme="dark"
          inlineCollapsed={!isFold}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: 'black',
          }}
        >
          {/* //홈 추가  홈링크 왜 안가지는지 모르겠음*/}
          <Menu.Item
            key="0"
            icon={<HomeOutlined />}
            onClick={menuRouter(router, '')}
          >
            홈
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />} title="매칭 보기">
            <Menu.Item key="1" onClick={menuRouter(router, 'matchings')}>
              축구
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="2"
            icon={<ContainerOutlined />}
            onClick={menuRouter(router, 'profile')}
          >
            베팅 내역
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<PieChartOutlined />}
            onClick={menuRouter(router, 'rankings')}
          >
            전체 랭킹
          </Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>
            <Link href="https://github.com/SeoSang/Sports-Dodo">
              <a target="_blank">소개페이지</a>
            </Link>
          </Menu.Item>
        </Menu>
      ) : (
        <div
          style={{
            display: 'none',
          }}
        ></div>
      )}
    </div>
  );
};

export default MainMenu;
