import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    box:{ 
        backgroundColor:'black' ,
        color:'white',
        flexDirection:'row',
        display: 'flex',
    },
    list:{
        paddingRight:'2%',
    },
    shoppingIcon:{
        flex:'1',
    },
    icon:{
        padding:'1%',
    },
    box1:{
        marginTop:'18%',
    },
    paper1:{
        marginTop:'7%',
        marginLeft:'1%',
        // width:'20%',
        // height:900,
        
    },
    paper2:{
        marginTop:'2.5%',
        width:'100%',
        height:900,
        justifyContent: 'space-evenly',
        marginLeft:'3%',
        marginRight:'3%',
        flexDirection:'row',
        display: 'flex',
    },
    paper3:{
        width:'100%',
        height:900,
        alignItems: 'center',
        justifyContent: 'center',   
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft:'3%',
        marginRight:'3%',
    },
    box1:{
        flexDirection:'row',
        display: 'flex',
        marginLeft:'3%',
        marginRight:'3%'
    },
    paper4:{
        marginTop:'2%',
        width:400,
        height:620,
        justifyContent: 'space-evenly'
    },
    image:{
        alignItems: 'center',
        justifyContent: 'center',   
        display: 'flex',
        width:300,
        height:200,
    },
     expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },

}))