import React, { FC } from "react"
import { Menu } from "antd"
import SubMenu from "antd/lib/menu/SubMenu"

import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons"

const MainMenu: FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <div style={{ zIndex: 10, position: "absolute", width: 256, top: "70px" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode='inline'
        theme='dark'
        inlineCollapsed={!visible}
      >
        <Menu.Item key='1' icon={<DesktopOutlined />}>
          매칭 보기
        </Menu.Item>
        <Menu.Item key='2' icon={<PieChartOutlined />}>
          통계 보기
        </Menu.Item>
        <Menu.Item key='3' icon={<ContainerOutlined />}>
          적중 내역보기
        </Menu.Item>
        <SubMenu key='sub1' icon={<AppstoreOutlined />} title='기타 메뉴'>
          <Menu.Item key='5'>메뉴 1</Menu.Item>
          <Menu.Item key='6'>메뉴 2</Menu.Item>
          <Menu.Item key='7'>메뉴 3</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<MailOutlined />} title='커뮤니티'>
          <Menu.Item key='9'>커뮤니티 1</Menu.Item>
          <Menu.Item key='10'>커뮤니티 2</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='11'>기타 1</Menu.Item>
            <Menu.Item key='12'>기타 2</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default MainMenu
