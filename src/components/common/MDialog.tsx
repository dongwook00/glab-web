import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialogTitleRoot: {
    textAlign: 'center',
    fontWeight: 700,
  },
  buttonRoot: {
    padding: '8px 24px',
  },
});

const MDialog: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Dialog open={false} aria-labelledby="form-dialog-title" maxWidth="xs" fullWidth>
        <DialogTitle classes={{ root: classes.dialogTitleRoot }} id="form-dialog-title">
          닉네임을 변경하시겠어요?
        </DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" variant="outlined" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button fullWidth variant="contained" color="primary">
            닉네임 변경
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MDialog;
