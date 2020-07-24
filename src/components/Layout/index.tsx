import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, ShishaTeas, Bowls, ShishaTea, Hookahs, Hookah, About, Cart } from 'pages'
import CustomAppBar from '../AppBar'
import { useStyles } from './styles'
import Bowl from 'pages/Bowl'

const Layout = () => {
  const classes = useStyles()
  return (
    <Router>
      <CssBaseline />
      <CustomAppBar>
        <Route exact path='/' component={Home} />
        <Container className={classes.root}>
          <Route path='/teas' component={ShishaTeas} />
          <Route path='/tea/:id' component={ShishaTea} />
          <Route path='/bowls' component={Bowls} />
          <Route path='/bowl/:id' component={Bowl} />
          <Route path='/hookahs' component={Hookahs} />
          <Route path='/hookah/:id' component={Hookah} />
          <Route path='/about' component={About} />
          <Route path='/cart' component={Cart} />
        </Container>
      </CustomAppBar>
    </Router>
  )
}

export default Layout
