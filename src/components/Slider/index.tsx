import React from 'react'
import Slider from 'react-slick'
import {
  CardMedia,
  Grid,
  Card,
} from '@material-ui/core'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useStyles } from './styles'
import { settings } from './utils/settings'

interface IProps {
  data: Array<string>;
}

const ProductSlider = ({ data }: IProps) => {
  const classes = useStyles()
  return (
    <Grid>
      <Slider {...settings}>
        {data.map((img) => (
          <Card className={classes.root}>
            <CardMedia
              component='img'
              height='350'
              image={`${window.location.origin}/${img}`}
            />
          </Card>
        ))}
      </Slider>
    </Grid>
  )
}
export default ProductSlider
