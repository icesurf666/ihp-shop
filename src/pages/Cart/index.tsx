import React, { useCallback } from 'react'
import MUIDataTable from 'mui-datatables'
import sumBy from 'lodash/sumBy'
import { observer } from 'mobx-react'
import {
  Button,
  Grid,
  Typography,
  Paper,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import useCartStore from 'hooks/useCartStore'
import axios from 'axios'
import { baseColumns } from './utils/columns'
import { IValues } from './types'
import CartForm from './components/CartForm'
import CustomColumns from './components/CustomColumns'
import { useStyles } from './styles'

const CartTable: React.FC = () => {
  const classes = useStyles()
  const { cart, clear } = useCartStore()

  const columns = [
    ...baseColumns,
    {
      name: '',
      options: {
        filter: false,
        customBodyRender: (selectableRows: number) => (
          <CustomColumns selectableRows={selectableRows} />
        ),
      },
    },
  ]

  const carts = cart.map((item, index) => {
    const total = item.product.price * item.count
    return [item.product.name, item.product.price, total, item.count, index]
  })

  const onResetCart = useCallback(() => {
    clear()
  }, [clear])

  const onSubmit = (values: IValues) => {
    axios.post('api/sendMail', { name: values.name, email: values.email, cart })
  }

  const total = cart.map((item) => {
    const totalPrice = item.product.price * item.count
    return { totalPrice }
  })

  const sum = sumBy(total, 'total')

  return (
    <>
      <Grid container justify='space-between'>
        <Grid item xs={8}>
          <MUIDataTable
            title='Cart'
            data={carts}
            columns={columns}
            options={{
              filter: false,
              sort: false,
              selectableRows: 'none',
              print: false,
              download: false,
              viewColumns: false,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h5' className={classes.totalText}>
              Total amount: ${sum}
            </Typography>
            <CartForm onSubmit={onSubmit} />
            <Button
              variant='contained'
              color='secondary'
              startIcon={<DeleteIcon />}
              fullWidth
              onClick={onResetCart}
            >
              Clear
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
export default observer(CartTable)
