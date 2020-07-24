import React, { useCallback } from 'react'
import InfoIcon from '@material-ui/icons/Info'
import GrainIcon from '@material-ui/icons/Grain'
import HelpIcon from '@material-ui/icons/HelpOutline'
import {
  Collapse,
  Divider,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import { useStyles } from './styles'

const DrawerStuff = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open])
  return (
    <>
      <Link to='/' className={classes.toolbar}>
        <img className={classes.logo} src={logo} alt='logo' />
      </Link>
      <Divider />
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <GrainIcon />
          </ListItemIcon>
          <ListItemText>Products</ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem component={Link} to='/teas' className={classes.nested}>
              <ListItemIcon />
              <ListItemText primary='Shisha tea' />
            </ListItem>
            <ListItem component={Link} to='/hookahs' className={classes.nested}>
              <ListItemIcon />
              <ListItemText primary='Hookah' />
            </ListItem>
            <ListItem component={Link} to='/bowls' className={classes.nested}>
              <ListItemIcon />
              <ListItemText primary='Bowls' />
            </ListItem>
          </List>
        </Collapse>
        <ListItem component={Link} to='/help' className={classes.link}>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText>Help</ListItemText>
        </ListItem>
        <ListItem component={Link} to='/about' className={classes.link}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>About us</ListItemText>
        </ListItem>
      </List>
    </>
  )
}

export default DrawerStuff
