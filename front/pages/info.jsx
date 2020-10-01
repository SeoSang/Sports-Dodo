import React from 'react';
import { Card } from 'antd';

const info = () => {
  return (
    <div>
      <Card style={{ backgroundColor: '#ffffff', margin: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', order: 0 }}>
          <img
            src="images/logo.png"
            alt="sports-dodo"
            style={{ flexDirection: 'column', width: '10%', height: '10%' }}
          />
          <h1 style={{ flexDirection: 'column' }}>스포츠도도</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', order: 1 }}>
          <h2>소갯말</h2>
        </div>
      </Card>
    </div>
  );
};

export default info;
