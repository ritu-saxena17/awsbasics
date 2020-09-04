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
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] =useContext(AuthContext)
    async function Signin(event){
        event.preventDefault()
        console.log('here')
        try {
            const user = await Auth.signIn(username, password);
            setEmail(user.attributes.email)
            user==null?alert('Something went wrong'): history.push({pathname:'/home/'+username,} );
            console.log('successful',user.attributes.email)
        } catch (error) {
            console.log('error signing in', error);
        }
     }
 
    return (
        <div className={clsx(classes.div)}>
        <Card className={clsx(classes.card)} p={2}>
             <Box margin={4}>
            <Grid container direction={"column"} spacing={3}>
                <Typography>Sigin to your account</Typography>
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
                    <Button style={{padding:'2%', marginLeft:'3%', backgroundColor:'#dea710', width:'35%'}} variant="contained" onClick={(event)=>Signin(event)}
              >Signin</Button>
                </div>
               </Grid>
            </Grid>
            </Box>
        </Card>
        </div>
    )
}
export default Login