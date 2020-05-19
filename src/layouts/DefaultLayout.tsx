import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components'
import Header from 'src/components/Header'
import Responsive from 'src/layouts/Responsive'

type Props = {
  component: React.FC<any>
  [rest: string]: any
}
const DefaultLayout: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Header />

          <StyledContent>
            <Responsive>
              <Component {...matchProps} {...rest} />
            </Responsive>
          </StyledContent>
        </Layout>
      )}
    />
  )
}

const { Content } = Layout

const StyledContent = styled(Content)`
  background-color: #fff;
  margin-top: 64px;
`

export default DefaultLayout
