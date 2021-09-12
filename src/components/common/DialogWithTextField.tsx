import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useAppDispatch } from '../../redux/hooks';
import { update } from '../../redux/profileSlice';

const useStyles = makeStyles({
  dialogTitleRoot: {
    textAlign: 'center',
  },
  dialogActionRoot: {
    padding: '8px 24px',
  },
});

interface DialogWithTextFieldProps {
  title: string;
  button: string;
  value: string;
  open: boolean;
  updateKey: string;
  onClose: () => void;
}

const DialogWithTextField: React.FC<DialogWithTextFieldProps> = (props) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(props.value);
  }, [props.value, props.open]);

  const onButtonClick = () => {
    dispatch(update({ type: props.updateKey, value }));
    props.onClose();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title" maxWidth="xs" fullWidth>
        <DialogTitle classes={{ root: classes.dialogTitleRoot }} id="form-dialog-title">
          <b>{props.title}</b>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions classes={{ root: classes.dialogActionRoot }}>
          <Button fullWidth variant="contained" color="primary" onClick={onButtonClick}>
            {props.button}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWithTextField;
