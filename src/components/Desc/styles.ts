import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => createStyles({
  margin: {
    margin: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  wrap: {
    marginTop: 20,
    marginLeft: 50,
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  textWrap: {
    marginLeft: 10,
    color: '#000000',
    textDecoration: 'none',
  },
  text: {
    color: '#000000',
    textDecoration: 'none',
  },
  desc: {
    whiteSpace: 'pre-line',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))
