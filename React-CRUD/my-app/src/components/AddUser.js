import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../functions/user';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const initialValue = {
    name: '',
    lname: '',
    email: '',
    phone: '',
    role:''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, lname, email, phone, role } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lname' value={lname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Mobile</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Role</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='role' value={role} id="my-input" />
            </FormControl>
                <FormControl>
                    {/* <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
                           <Link to="/"> <Button variant="contained" color="secondary" >Cancel</Button> 
                   </Link> */}
                </FormControl>
            <div>
                 <button className="btn btn-primary"  onClick={() => addUserDetails()}>Add User</button>
                    <Link to="/">
                        <button className="btn btn-danger">Cancel</button> 
                    </Link>
            </div>
        </FormGroup>
        
    )
}

export default AddUser;