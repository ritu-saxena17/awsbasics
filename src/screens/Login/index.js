import React, { useContext } from 'react'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { useStyles } from "./styles";
import clsx from "clsx";
import TextFields from '../components/TextField';
import { useHistory } from "react-router-dom";
import { Grid, Typography, Box, Button, setRef } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { AuthContext } from '../../AuthContext';

 function Login() {
    const classes = useStyles();
    const history=useHistory();
    const [username, setUsername] = useContext(AuthContext)
    const [password, setPassword] = React.useState("");
    async function Signin(){
        console.log('here')
        try {
            const user = await Auth.signIn(username, password);
            history.push("/todo")
            console.log('successful',user)
        } catch (error) {
            console.log('error signing in', error);
        }
     }
 
    return (
        <Card className={clsx(classes.card)} p={2}>
             <Box margin={4}>
            <Grid container direction={"column"} spacing={3}>
                <Typography>Sigin to your account</Typography>
                {/* <Grid item>
                <TextFields
                    label="Enter your email"
                    field="email"
                    value={email}
                    onChange={(event) => {
                    setEmail(event.target.value);
                }}/>
                </Grid> */}
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
                    <Typography variant='body2' className={clsx(classes.text)}>New user?</Typography>
                    <Typography variant='body2' className={clsx(classes.hypertext)} onClick={()=>history.push("/signup")}>Sigup</Typography>
                    <Button style={{padding:'2%', marginLeft:'3%', backgroundColor:'#dea710', width:'35%'}} variant="contained" onClick={Signin}
              >Signin</Button>
                </div>
               </Grid>
            </Grid>
            </Box>
        </Card>
    )
}
export default Login