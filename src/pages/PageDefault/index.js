import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import { Main } from './style';

const PageDefault = ({ children, paddingAll }) => (
  <>
    <Menu />
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <Footer />
  </>
);

export default PageDefault;
