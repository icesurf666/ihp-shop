import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuItem, Badge, useTheme, CssBaseline, AppBar, IconButton, Hidden, Drawer, Typography, Toolbar } from '@material-ui/core'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore'
import { Link } from 'react-router-dom'
import useCartStore from 'hooks/useCartStore'
import sumBy from 'lodash/sumBy'
import { observer } from 'mobx-react'
import { useStyles } from './styles'
import DrawerStuff from './components/DrawerStuff'

interface IProps {
  children: React.ReactNode;
}

const ResponsiveDrawer = (props: IProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const { cart } = useCartStore()
  const countProduct = sumBy(cart, 'count')

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolbarWrap}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>
            IHP
          </Typography>

          <MenuItem component={Link} to='/cart'>
            <IconButton aria-label='show 11 new notifications' color='inherit'>
              <Badge badgeContent={countProduct} color='secondary'>
                <LocalGroceryStoreIcon />
              </Badge>
            </IconButton>
          </MenuItem>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <DrawerStuff />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            <DrawerStuff />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  )
}

export default observer(ResponsiveDrawer)
