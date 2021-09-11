import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(0),
    },
  }),
);

const MButton: React.FC = () => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
      Send
    </Button>
  );
};

export default MButton;
