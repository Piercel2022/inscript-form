import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from './ModalDialog';

const App = () => {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Button variant="contained" className="formulaire" color="primary" onClick={handleOpen}>
        Formulaire
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default App;
