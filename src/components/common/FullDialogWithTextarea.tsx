import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const FullDialogTextarea: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Dialog fullScreen open={true}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              소개
            </Typography>
            <Button autoFocus>완료</Button>
          </Toolbar>
        </AppBar>
        <TextField id="filled-multiline-static" multiline rows={4} defaultValue="ddd" />
      </Dialog>
    </>
  );
};
export default FullDialogTextarea;
