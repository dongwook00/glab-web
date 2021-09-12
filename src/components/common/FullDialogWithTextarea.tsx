import { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useAppDispatch } from '../../redux/hooks';
import { update } from '../../redux/profileSlice';

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

const useCustomStyles = makeStyles({
  dialog: {
    width: '48rem',
  },
  textField: {
    height: '50vh',
    lineHeight: '1.6',
    fontSize: '1.6rem',
  },
});

interface FullDialogWithTextareaProps {
  value: string;
  open: boolean;
  onClose: () => void;
}

const FullDialogWithTextarea: React.FC<FullDialogWithTextareaProps> = (props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const customStyle = useCustomStyles();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(props.value);
  }, [props.value, props.open]);

  const onButtonClick = () => {
    dispatch(update({ type: 'about', value }));
    props.onClose();
  };

  return (
    <>
      <Dialog classes={{ paperFullScreen: customStyle.dialog }} fullScreen open={props.open} onClose={props.onClose}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              소개
            </Typography>
            <Button autoFocus onClick={onButtonClick}>
              완료
            </Button>
          </Toolbar>
        </AppBar>
        <TextField
          classes={{ root: customStyle.textField }}
          id="filled-multiline-static"
          multiline
          rows={4}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
      </Dialog>
    </>
  );
};
export default FullDialogWithTextarea;
