import React from 'react'
import { useStyles } from './styles'

const Home: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.abs}>International Hookah Products</div>
    </div>
  )
}

export default Home
