import { notification } from 'antd';
import React from 'react';

const Notification = (e) => {
  notification.info({
    message: '알람',
    description: e,
    // bottomRight,
    // onClick: () => {
    //   console.log('Notification Clicked!');
    // },
  });
  return <></>;
};

export default Notification;
