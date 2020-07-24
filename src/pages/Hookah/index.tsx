import React from 'react'
import { Grid } from '@material-ui/core'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import hookahs from '../Hookahs/fixtures'
import { Slider, Desc } from 'components'


const Hookah: React.FC<RouteComponentProps<{id: string}>> = ({ match }) => {
  const id = Number(match.params.id)
  const product = hookahs[id - 9]
  return (
    <Grid container>
      <Grid item xs={4}>
        <Slider data={product.src} />
      </Grid>
      <Grid item xs={8}>
        <Desc product={product} />
      </Grid>
    </Grid>
  )
}

export default withRouter(Hookah)
