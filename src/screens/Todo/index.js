import React,{useEffect, useContext} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import * as mutations from '../../graphql/mutations';
import { createTodo } from '../../graphql/mutations'
import { listTodos } from '../../graphql/queries'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from './styles';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import {  Dialog, DialogTitle, DialogContent, Typography, Box, Card } from '@material-ui/core';
import { AuthContext } from '../../AuthContext';
function Todo() {
    const initialState = { name: '', description: '', completed:false}
    const [username,setUsername]=useContext(AuthContext)
    const [open, setOpen] = React.useState(false);
    const [formState, setFormState] = React.useState(initialState)
    const [id,setId]=React.useState('');
    const [index,setIndex]=React.useState();
    const [list,setList]=React.useState([]);
    const [task,setTask]=React.useState('');
    const [checked,setChecked]=React.useState(false);
    const [click,setClick]=React.useState(0);
    const [component,setComponent]=React.useState([]);
    const [value,setValue]=React.useState([]);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickMenu = (event,id) => {
        setAnchorEl(event.currentTarget);
        setId(id)
      };
      const handleCloseMenu = () => {
        setAnchorEl(null);
      };
    async function fetchData() {
        try{
           const todoData = await API.graphql(graphqlOperation(listTodos))
           const list = todoData.data.listTodos.items
           setList(list)
           console.log('data is',list)
        }
        catch(e){
          console.log('ERROR is',e)
        }
       }
    useEffect(() => {
            fetchData()
        }, []);
    async function deleteData(){
        const todoDetails = {
            id: id,
          };
          try{
          const deletedTodo = await API.graphql(graphqlOperation(mutations.deleteTodo, {input: todoDetails}));
          console.log('deleted items',deletedTodo)
          const data= deletedTodo.data.deleteTodo;
          const newList = list.filter((item) => item.id !== id);
          setList(newList);
          }
          catch(error){
              console.log('error is',error)
          }
    }
    const handleChange = (event) => {
           setChecked(event.target.checked)
          };
    const handleUpdate = () => {
            setOpen(true);
            setValue('')
            console.log('index is',id)
            handleCloseMenu()
          };
          const handleClose = () => {
            setOpen(false);
          };
    const RenderView=()=>{
        console.log('renderrrr',list);
        return(
           list.map((todo, index) => (
            <Card onClick={(event)=>{ setAnchorEl(event.currentTarget);
                setId(todo.id)}} padding='3%' width='30%' key={todo.id ? todo.id : index}>
                  <Typography variant={'h5'} 
                //   onClick={()=>deleteData(todo.id)}
                  ><li>{todo.name}</li></Typography>
                   <p 
                   //onClick={()=>handleClickOpen(todo.id)}
                   >Description: {todo.description}</p>
                   <p >{todo.completed}</p>
                  </Card>
               ))
        );
    }
    
    const ButtonClick=()=> {
        setComponent([...component, <CheckList/>]);
         
        setClick(click=>click+1)
        // console.log('component is',click)
      }
    const updatedata=async()=>{
        console.log('here updated',id)
        const todoDetails = {
            id: id,
            description: value
          };
          const updatedTodo = await API.graphql(graphqlOperation(mutations.updateTodo, {input: todoDetails}));
          const data= updatedTodo.data.updateTodo;
          const newList = list.map((item) => {
            if (item.id === id) {
              const updatedItem = {
                ...data,
               item
              };
              return updatedItem;
            }
            return item;
        });
          setList(newList)
          setOpen(false)
    }
    const AddData= async ()=>{
        try {
            if (!formState.name || !formState.description) return
            const todo = { ...formState }
            setList([...list, todo])
            console.log('listtttt',list);
            const data=await API.graphql(graphqlOperation(createTodo, {input: todo}))
            console.log('daaaaaa is',data);
            setFormState(initialState)
          } catch (err) {
            console.log('error creating todo:', err)
          }
    }
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
      }
    
    function CheckList(){
        console.log('clicked')
       return(
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} name="gilad" />}
            label="Add"/>
        );
    }
        return ( 
          <div className={clsx(classes.container)}>
              <Box color='white' className={clsx(classes.box)} p={0.1} >
               <FormatListBulletedIcon  className={clsx(classes.icon)}  fontSize="large"/><Typography variant={'h5'}>What's to note today?</Typography>
              <h2>{username}</h2>
              </Box>
        <div>
        <Menu  anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                <MenuItem onClick={handleUpdate}>Update Entry</MenuItem>
                <MenuItem onClick={deleteData}>Delete Entry</MenuItem>
            </Menu>
        <Dialog open={open}
            onClose={handleClose}>
            <DialogTitle>Enter the description</DialogTitle>
            <DialogContent>
            <TextField
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}/>
            <Button style={{padding:'2%', marginLeft:'3%', backgroundColor:'#dea710', width:'35%'}} variant="contained" onClick={updatedata }
              >Confirm</Button>
            </DialogContent>
            </Dialog>
        <TextField 
              className={clsx(classes.textfield)}
              label="Add task"
              type="text"
              value={formState.name}
              onChange={event => setInput('name', event.target.value)}
            />
              <TextField
               className={clsx(classes.textfield)}
              label="Add description"
              type="text"
              value={formState.description}
              onChange={event => setInput('description', event.target.value)}
            />
    <Button variant="contained" color="primary" component="span" onClick={()=>AddData()}>
             Add to the list
            </Button>
            <Button style={{marginLeft:'20px'}} variant="contained" color="primary" component="span" onClick={()=>ButtonClick()}>
             Add CheckList
            </Button>
            {/* <AccessAlarmIcon   className={clsx(classes.icon)} color="primary" onClick={CheckList} /> */}
        </div>
        <div>
           <RenderView/>
           {click!=0?
           component.map(function(component, index) 
                  {
                      return  component;
                  })
                  :null}
        </div>
          </div>
          );
    }
export default Todo