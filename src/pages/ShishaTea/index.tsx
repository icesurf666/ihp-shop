import React from 'react'
import { Grid } from '@material-ui/core'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Slider, Desc } from 'components'
import teas from '../ShishaTeas/fixtures'

const ShishaTea: React.FC<RouteComponentProps<{id: string}>> = ({ match }) => {
  const id = Number(match.params.id)
  const product = teas[id - 26]
  return (
    <Grid container>
      <Grid item sm={4} xs={12}>
        <Slider data={product.src} />
      </Grid>
      <Grid item sm={8} xs={12}>
        <Desc product={product} />
      </Grid>
    </Grid>
  )
}

export default withRouter(ShishaTea)
