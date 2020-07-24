import React from 'react'
import { Grid } from '@material-ui/core'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Slider, Desc } from 'components'
import bowls from '../Bowls/fixtures'

const Bowl: React.FC<RouteComponentProps<{id: string}>> = ({ match }) => {
  const id = Number(match.params.id)
  const product = bowls[id]
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

export default withRouter(Bowl)
