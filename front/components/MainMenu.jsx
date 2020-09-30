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
          style={{backgroundColor:"black"}}

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
            <Menu.Item key="2">
              <Link href="/matchings">
                <a>야구</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">농구</Menu.Item>
          </SubMenu>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            <Link href="/profile">
              <a> 베팅 내역 </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<PieChartOutlined />}>
            <Link href="/rankings">
              <a> 전체 랭킹 </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            기타 메뉴(아직 쓸지 안쓸지 모름)
          </Menu.Item>
          <SubMenu key="sub2" icon={<MailOutlined />} title="커뮤니티">
            <Menu.Item key="7"> 커뮤니티 1 </Menu.Item>
            <Menu.Item key="8"> 커뮤니티 2 </Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="9"> 기타 1 </Menu.Item>
              <Menu.Item key="10"> 기타 2 </Menu.Item>
            </SubMenu>
          </SubMenu>
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
