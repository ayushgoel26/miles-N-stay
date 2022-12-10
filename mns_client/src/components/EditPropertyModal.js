import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const initialFormData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
};

function EditPropertyModal({data = initialFormData}) {

    const classes = useStyles();
    const [formData, setFormData] = React.useState(data);
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          name="firstName"
          label="First Name"
          defaultValue={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          name="lastName"
          label="Last Name"
          defaultValue={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          defaultValue={formData.email}
          onChange={handleChange}
        />
      </form>
    );
  
}

export default EditPropertyModal
