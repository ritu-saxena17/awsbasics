import React, { useContext, useState } from 'react'
import Card from '@material-ui/core/Card';
import { useStyles } from "./styles";
import clsx from "clsx";
import TextFields from '../components/TextField';
import { useHistory } from "react-router-dom";
import { Grid, Typography, Box, Button, setRef, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { AuthContext } from '../../AuthContext';

 function SignUp() {
    const classes = useStyles();
    const history=useHistory();
    const [username, setUsername] =useState('')
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [code, setCode] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
      };
    async function EnterCode(){
        try{
         await Auth.confirmSignUp(username, code);
         history.push("/login")
        }
        catch(error){
            console.log('error',error)
        }
    }
    async function Signup(){
        console.log('here',number)
         try {
             const { user } = await Auth.signUp({
                 username,
                 password,
                 attributes: {
                    email,        
                 }
             });
            user==null?alert('Sign up failed'):handleClickOpen()
             console.log(user);
         } catch (error) {
             console.log('error signing up:', error);
         }
     }
 
    return (
        <Card className={clsx(classes.card)} p={2}>
             <Box margin={4}>
             <Dialog open={open}
            onClose={handleClose}>
            <DialogTitle>Enter the verification code</DialogTitle>
            <DialogContent>
            <TextFields
                    field="code"
                    value={code}
                    onChange={(event) => {
                        setCode(event.target.value);
                    }}/>
            <Button style={{padding:'2%', marginLeft:'3%', backgroundColor:'#dea710', width:'35%'}} variant="contained" onClick={EnterCode  }
              >Confirm</Button>
            </DialogContent>
            </Dialog>
            <Grid container direction={"column"} spacing={3}>
                <Typography>Signup to your account</Typography>
                <Grid item>
                <TextFields
                    label="Enter your email"
                    field="email"
                    value={email}
                    onChange={(event) => {
                    setEmail(event.target.value);
                }}/>
                </Grid>
                <Grid item>
                 <TextFields
                    label="Enter your username"
                    field='username'
                    value={username}
                    onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                </Grid>
                <Grid item>
                <TextFields 
                    label="Enter your password"
                    field="password"
                    value={password}
                    onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
                </Grid>
                <Grid item >
                <div style={{direction:'row', display:'flex'}}>
                    <Typography variant='body2' className={clsx(classes.text)}>Already have an account?</Typography>
                    <Typography variant='body2' className={clsx(classes.hypertext)} onClick={()=>history.push("/login")}>Sigin</Typography>
                    <Button style={{padding:'2%', marginLeft:'3%', backgroundColor:'#dea710', width:'35%'}} variant="contained" onClick={Signup
                      
                    }
              >Signup</Button>
                </div>
               </Grid>
            </Grid>
            </Box>
        </Card>
    )
}
export default SignUp