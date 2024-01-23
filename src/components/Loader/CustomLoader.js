import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const CustomLoader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <RotatingLines
        strokeColor="var(--color-button-link)"
        strokeWidth="3"
        width="200"
        loading={true}
      />
    </div>
  );
};

export default CustomLoader;
