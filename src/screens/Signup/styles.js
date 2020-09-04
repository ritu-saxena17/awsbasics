import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    div:{
        alignItems: 'center',
        justifyContent: 'center',   
        display: 'flex',
    },
    card:{
        width:'30%',
        height:'40%',
        marginTop:'10%',    
    },
    text:{
        color:'#8a8884'
    },
    hypertext:{
        color:'#dea710'
    },
    button:{
        padding:'1%',
        marginLeft:'1%',
        backgroundColor:'#dea710'
    }
}))