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

const MainMenu = ({ visible }) => {
  const [isFold, setFold] = useState(true);
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
          style={{backgroundColor:"black", position:'fixed',top:'50px',width:'30%'}}

        >
          {/* //홈 추가  홈링크 왜 안가지는지 모르겠음*/}
          <Menu.Item key="0" icon={<HomeOutlined />}>
            <Link href="/">
              <a> 홈 </a>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />} title="매칭 보기">
            <Menu.Item key="1">
              <Link href="/matchings">
                <a> 축구 </a>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<ContainerOutlined />}>
            <Link href="/profile">
              <a> 베팅 내역 </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PieChartOutlined />}>
            <Link href="/rankings">
              <a> 전체 랭킹 </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>
            <Link href="/info">
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
