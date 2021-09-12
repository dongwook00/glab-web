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

interface DialogWithTextFieldProps {
  value: string;
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles({
  dialogTitleRoot: {
    textAlign: 'center',
  },
  dialogActionRoot: {
    padding: '8px 24px',
  },
});

const DialogWithTextField: React.FC<DialogWithTextFieldProps> = (props) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(props.value);
  }, [props.value, props.open]);

  const onButtonClick = () => {
    dispatch(update({ type: 'nickname', value }));
    props.onClose();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title" maxWidth="xs" fullWidth>
        <DialogTitle classes={{ root: classes.dialogTitleRoot }} id="form-dialog-title">
          <b>닉네임을 변경하시겠어요?</b>
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
            닉네임 변경
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWithTextField;
