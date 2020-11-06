import { notification } from 'antd';
import React from 'react';

const Notification = (e) => {
  notification.info({
    message: '알람',
    description: e,
  });
  return <></>;
};

export default Notification;
