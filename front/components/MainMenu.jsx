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

const A = styled.a`
  width: 100%;
`;

const MainMenu = ({ visible }) => {
  const [isFold, setFold] = useState(true);
  const handleMouseEnter = e => {
    setFold(true);
  };

  const handleMouseLeave = e => {
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
          <Menu.Item key="0" icon={<HomeOutlined />}>
            <Link href="/">
              <A> 홈 </A>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />} title="매칭 보기">
            <Menu.Item key="1">
              <Link href="/matchings">
                <A> 축구 </A>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<ContainerOutlined />}>
            <Link href="/profile">
              <A>베팅 내역</A>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PieChartOutlined />}>
            <Link href="/rankings">
              <A> 전체 랭킹 </A>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>
            <Link href="https://github.com/SeoSang/Sports-Dodo" target="_blank">
              소개페이지
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
