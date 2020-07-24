import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => createStyles({
  logo: {
    width: 60,
    height: 60,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: '#000',
  },
  link: {
    color: '#000',
  },
}))
