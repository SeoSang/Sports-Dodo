import { Button, Input, Checkbox, Form, Alert, notification } from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

import React from 'react';

const Notification = (e) => {
  notification.open({
    message: 'Notification Title',
    description: e,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
  return <></>;
};

export default Notification;
