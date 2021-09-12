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

interface DialogWithDatePickerProps {
  open: boolean;
  value: string;
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

const DialogWithDatePicker: React.FC<DialogWithDatePickerProps> = (props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(props.value);
  }, [props.value, props.open]);

  const onButtonClick = () => {
    dispatch(update({ type: 'birthday', value }));
    props.onClose();
  };

  return (
    <div>
      <Dialog open={props.open} aria-labelledby="form-dialog-title" maxWidth="xs" fullWidth>
        <DialogTitle classes={{ root: classes.dialogTitleRoot }} id="form-dialog-title">
          <b>생일을 변경하시겠어요?</b>
        </DialogTitle>
        <DialogContent>
          <TextField
            id="date"
            type="date"
            fullWidth
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions classes={{ root: classes.dialogActionRoot }}>
          <Button fullWidth variant="contained" color="primary" onClick={onButtonClick}>
            생일 변경
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWithDatePicker;
