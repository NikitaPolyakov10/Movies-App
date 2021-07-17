import React from 'react';
import HeaderContainer from '../Header/HeaderContainer/index';
import Footer from '../Footer';
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <div className='wrapper'>
          <div className='container'>
            <HeaderContainer />
            <section>
              {children}
            </section>
            <Footer />
          </div>
        </div>
    )
}

export default Layout;