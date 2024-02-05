import React from 'react';
import NavigationBar from './NavigationBar'; // Ensure this path is correct

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div style={{ paddingTop: '70px' }}> {/* You can adjust the padding value as needed */}
        {children}
      </div>
    </>
  );
};

export default Layout;
