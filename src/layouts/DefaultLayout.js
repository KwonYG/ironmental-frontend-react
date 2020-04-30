import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from 'antd'
import { colors } from '../styles/palette'
const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <StyledHeader>놀라지마 ㅎ 테스트일 뿐이야</StyledHeader>
          <Content>
            <Component {...matchProps} {...rest} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      )}
    ></Route>
  )
}

const { Header, Footer, Content } = Layout

const StyledHeader = styled(Header)`
  background-color: ${colors.purple.primary};
`

export default DefaultLayout
