import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    width: 255,
    marginTop: 20,
    marginRight: 10,
  },
  card: {
    justifyContent: 'flex-end',
  },
  cardAction: {
    height: 120,
  },
  desc: {
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
  },
  title: {
    lineHeight: 1,
    fontSize: 18,
  },
  img: {
    maxWidth: '100%',
  },
})
