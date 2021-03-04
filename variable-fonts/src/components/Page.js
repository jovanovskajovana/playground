import React from 'react'
import { Link } from 'gatsby'
 
import GlobalStyles from '../styles/GlobalStyles'
import { PageLayout, Navigation } from '../styles/PageLayout'

const Page = ({ children, color }) => {
  return (
    <>
      <GlobalStyles />
      <PageLayout bgColor={color}>
        {children}
        <Navigation>
          <Link to="/" activeClassName="active"><span></span></Link>
          <Link to="/second" activeClassName="active"><span></span></Link>
          <Link to="/third" activeClassName="active"><span></span></Link>
          <Link to="/fourth" activeClassName="active"><span></span></Link>
          <Link to="/fifth" activeClassName="active"><span></span></Link>
          <Link to="/sixth" activeClassName="active"><span></span></Link>
        </Navigation>
      </PageLayout>
    </>
  );
}

export default Page;
