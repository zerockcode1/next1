import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;