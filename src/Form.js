import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '500px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [genre, setGenre] = useState('');
  const [lecture, setLecture] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, adresse, telephone, genre, lecture);
    handleClose();
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Prénom"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Nom"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Adresse"
        variant="filled"
        type="adresse"
        required
        value={adresse}
        onChange={e => setAdresse(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Telephone"
        variant="filled"
        type="telephone"
        required
        value={telephone}
        onChange={e => setTelephone(e.target.value)}
      />
      <TextField
        label="Genre"
        variant="filled"
        type="genre"
        required
        value={genre}
        onChange={e => setGenre(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Annuler
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Inscription
        </Button>
      </div>
    </form>
  );
};

export default Form;