import React, { useContext, useEffect, useState } from 'react'
import { Typography, Box, Toolbar, Dialog, DialogTitle, DialogContent, Button, Paper, Grid, FormControl, FormControlLabel, FormGroup, Checkbox, FormLabel, Grow, Card, CardContent, CardActions, IconButton, Collapse, CardMedia } from '@material-ui/core'
import { AuthContext } from '../../AuthContext';
import { Storage } from 'aws-amplify';
import { useStyles } from "./styles";
import SelectTextField from "../components/SelectTextField";
import ReorderIcon from '@material-ui/icons/Reorder';
import clsx from "clsx";
import ReactCountryFlag from "react-country-flag"
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import TextFields from '../components/TextField';
import { createType, createItem, createSeller, createItemTypeSeller } from '../../graphql/mutations';
import { getType, getItem, listItems, listTypes } from '../../graphql/queries';
import { graphqlOperation, API } from 'aws-amplify';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { onCreateItem } from '../../graphql/subscriptions';
function HomePage() {
const initialState = { name:''}
const [itemTypeState, setItemTypeState] = React.useState(initialState)
const initialState1 = { itemTypeId:'', name:'', description:'', country:'', cost:''}
const [itemState, setItemState] = React.useState(initialState1)
const initialState2 = { sellerItemId:'', name:'', location:''}
const [sellerState, setSellerState] = React.useState(initialState2)
const initialState3 = { itemTypeSellerSellerId:'', itemTypeSellerTypeId:''}
const [commonState, setCommonState] = React.useState(initialState3)
const [data,setData]=React.useState([]);
const [item,setItem]=React.useState([]);
const [choice,setChoice]=React.useState('');
const [isChecked, setIsChecked] = useState([]);
const classes=useStyles();
const [key,setKey]=useState('')
const [awsImage, setAwsImage] = React.useState([]);
const [cart,setCart]=useState(0);
const dialogs={ first:false, second:false, third:false }
const [open, setOpen] = React.useState(dialogs);
const type = [
  { id: "1", name: "Electronics" },
  { id: "2", name: "Home and Furniture" },
  { id: "3", name: "Books Zone" },
  { id: "4", name: "Clothing" },
];
const [email, setEmail]=useContext(AuthContext)
    const handleDialogOpen=(key)=>{
      setOpen({...open,[key]:true});
    }
    const handleDialogClose = async (key,id) => {
        setOpen({...open,[key]:false});
        if(key==='third'){
        try{
          setCommonState({ ...commonState, ['itemTypeSellerSellerId']: id})
         await API.graphql(graphqlOperation(createItemTypeSeller, {input: commonState})).then((type)=>{
            console.log('final id',type);
          })
        }catch(error){
        console.log(error);
      }
      }
      };
      const handleUploadClick = (e) => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          Storage.put(sellerState.sellerItemId+'.png', image, {
            contentType: 'image/png'
        })
        .then (result => {
          Storage.get(result + '.png')
          .then((url) => {
            // console.log('result is',result);
            const image=awsImage
            image.push(url)
            setAwsImage(image)
            console.log('image inserted',awsImage)
            } )
          .catch(err => console.log(err));
         })
        .catch(err => console.log(err));
        }
      };
     function setInput1(key, value) {
      setItemTypeState({ ...itemTypeState, [key]: value })
      }
      function setInput2(key, value) {
        setItemState({ ...itemState, [key]: value })
        }
        function setInput3(key, value) {
          setSellerState({ ...sellerState, [key]: value })
          }
      async function fetchData() {
        try{
          console.log('use effect 1');
          const images=[]
           const todoData = await API.graphql(graphqlOperation(listTypes))
           const list = todoData.data.listTypes.items
           setData(list)
           const items = await API.graphql(graphqlOperation(listItems))
           const list1=items.data.listItems.items;
           list1.map((item,index)=>{
            Storage.get(item.id + '.png')
            .then((result) => {
              // console.log('result is',result);
              images.push(result)
              } )
            .catch(err => console.log(err));
           })
           setAwsImage(images);
          setItem(list1)
          console.log('got list1',item);
          let subscriber;
          subscriber = API.graphql(graphqlOperation(onCreateItem)).subscribe({
            next: (data) => {console.log('subscribe',data.value.data.onCreateItem)
            list1.push(data.value.data.onCreateItem)
            setItem(list1)
            // console.log('itemmmmm',item);
          }
          });
          return () => subscriber.unsubscribe()
        }
        catch(e){
          console.log('ERROR is',e)
        }
       }
    useEffect(() => {
            fetchData()
        }, []);

    useEffect(()=>{
      console.log('use effect 2');
      console.log('got list 2',item);
      setCart(isChecked.length)
    },[isChecked])

    async function addItemType(key){
      console.log('clicked',type[itemTypeState.name-1].name)
      try{
        //  await API.graphql(graphqlOperation(createType, {input: type[itemTypeState.name-1]})).then((result)=>{
        //   console.log('clicked again',type[itemTypeState.name-1].name)
        //   const list = type[itemTypeState.name-1].name
        //   setData([...data, list])
        //   console.log('dataa',data);
        setInput2(key,type[itemTypeState.name-1].id)
        //   console.log('item',itemState)
          handleDialogClose('first')
          handleDialogOpen('second')
          //setItemTypeState(initialState)
        } catch (err) {
          console.log('error creating todo:', err)
        }  
    }
    async function addItem(key){
      try{
      await API.graphql(graphqlOperation(createItem, {input: itemState})).then((type)=>{
          //setItem([...item, type.data.createItem])
          setCommonState({ ...commonState, ['itemTypeSellerTypeId']: itemState.itemTypeId})
          setSellerState({...sellerState,[key]:type.data.createItem.id})
          setItemState(initialState1)
          handleDialogClose('second')
          handleDialogOpen('third')
        })
        } catch (err) {
          console.log('error creating list:', err)
        }
      
    }
    async function addSeller(){
      try {
     await API.graphql(graphqlOperation(createSeller, {input: sellerState})).then((type)=>{
      setCommonState({ ...commonState, ['itemTypeSellerSellerId']: type.data.createSeller.id})
          handleDialogClose('third',type.data.createSeller.id)
          handleDialogClose('second')
          handleDialogClose('first')
          setSellerState(initialState2)
        })
      }
         catch (err) {
          console.log('error creating list:', err)
        }
      
    }
    function GetTypeItem(){
       return(
        data.map((item,index)=>{
          const name=item.name
          return(
            <Grid item xs={3} key={index} >
              <FormControl>
                <FormLabel>
                  <FormGroup value={choice} >
                  <FormControlLabel control={<Checkbox checked={choice[item.name]} onChange={(event)=>{
                    //data.forEach(item => setChoice(prevState => ({...prevState, [item.name]: false})));
                    let newArr = [...choice]; 
                    newArr[item.name] = event.target.checked
                    setChoice(newArr)
                    setKey(item.name)
                  }}/>}
                  label={item.name}/>
                  </FormGroup>
                </FormLabel>
              </FormControl>
            </Grid>
          )
        })
      )
    }
    function addToTheCart(id){
    if (isChecked.includes(id)) {
      const newList = isChecked.filter((item) => item !== id);
      setIsChecked(newList);
      setCart(isChecked.length)
    }
    else{
    isChecked.push(id);
    setIsChecked([...isChecked]);
    setCart(isChecked.length)
    }
    //setCart(isChecked.length)
    }
     function GetItemsData(){
      console.log('here images',awsImage );
      let id;
      type.map((item,index)=>{
        if(item.name===key)
          id=item.id
      })
     return(
       item.map((item,index)=>{
        if(item.type.id===id){
          var country=item.country;
          var cost=Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
          }).format(item.cost)
          return(
              <Grow in={choice} key={index} >
                <Card elevation={4} className={clsx(classes.paper4)}>
                  <CardContent >
                    <Typography color="textSecondary" >Item</Typography>
                    <Typography ccomponent="h2" style={{fontWeight: 'bold',fontSize:20}}>{item.name}</Typography>
                    <br/>
                    <CardMedia>
                      <img src={awsImage[index]} className={clsx(classes.image)}/>
                    </CardMedia>
                    <Typography color="textSecondary" >Description</Typography>
                    <Typography variant="body2" component="p">{item.description}</Typography>
                    <br/>
                    <Typography variant='h6'>Best Price: {cost}</Typography>
                    <Typography>Made in: {country} <ReactCountryFlag countryCode={country.substring(0,2)} style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}/></Typography>
                  </CardContent>
                  <CardActions>
                    {!isChecked.includes(item.id)?<Button id={item.id} onClick={()=>addToTheCart(item.id)} style={{backgroundColor:'#dea710'}}>Add to the Cart</Button>:<Button id={item.id} onClick={()=>addToTheCart(item.id)} style={{backgroundColor:'#8a8884'}}>Added in the cart</Button>} 
                  </CardActions>
                </Card>
              </Grow>
          )
        }
       })
     )
    }
    function deleteData(){
      
    }
    return (
        <div>
         <div>
            <AppBar>
                <Toolbar className={clsx(classes.box)}>
                <ReorderIcon className={clsx(classes.list)}/>
                <Typography >Amazing Shopping</Typography>
                {email=='ritus@geekyants.com'?<AddIcon className={clsx(classes.shoppingIcon)} onClick={event=>handleDialogOpen('first')}/>:<Typography className={clsx(classes.shoppingIcon)}/>}
               <ShoppingCartIcon className={clsx(classes.icon)}/>
               <Typography> Cart Items:{cart}</Typography> 
               <PersonIcon className={clsx(classes.icon)}/>
               <Typography>{email}</Typography>
                </Toolbar>
            </AppBar>
            </div>
            <Dialog open={open['first']}
            onClose={event=>handleDialogClose('first')}>
            <DialogTitle>Enter the Type of Item</DialogTitle>
            <DialogContent>
            <SelectTextField
              label="Select"
              value={itemTypeState.name}
              onChange={event=> setInput1('name',event.target.value)}
              helperText="Please select the type of item"
              array={type}
          />
            <Button onClick={()=>addItemType('itemTypeId')} style={{padding:'2%', marginLeft:'3%', backgroundColor:'#dea710', width:'35%'}} variant="contained"
              >Confirm</Button>
            </DialogContent>
            </Dialog>
            <Dialog open={open['second']}
            onClose={event=>handleDialogClose('second')}>
            <DialogTitle>Enter the description</DialogTitle>
            <DialogContent>
            <TextFields
                    value={itemState.name}
                    type='text'
                    label="Item Name"
                    onChange={event => setInput2('name', event.target.value)}/>
            <TextFields
                    value={itemState.cost}
                    type='number'
                    label="Item Cost in Rs"
                    onChange={event => setInput2('cost', event.target.value)}/>
            <TextFields
                    value={itemState.description}
                    type='text'
                    label="Item Description"
                    onChange={event => setInput2('description', event.target.value)}/>
            <TextFields
                    value={itemState.country}
                    type='select'
                    label="Made in"
                    onChange={event => setInput2('country', event.target.value)}/>
            <Button onClick={()=>addItem('sellerItemId')} style={{padding:'2%', marginLeft:'3%', backgroundColor:'#dea710', width:'35%'}} variant="contained"
              >Confirm</Button>
            </DialogContent>
            </Dialog>
            <Dialog open={open['third']}
            onClose={event=>handleDialogClose('third')}>
            <DialogTitle>Enter the description</DialogTitle>
            <DialogContent>
            <input
            accept="image/*"
            type="file"
             multiple
             onChange={handleUploadClick}
            />
            <TextFields
                    value={sellerState.name}
                    type='text'
                    label="Seller Name"
                    onChange={event => setInput3('name', event.target.value)}/>
            <TextFields
                    value={sellerState.location}
                    type='text'
                    label="Seller location"
                    onChange={event => setInput3('location', event.target.value)}/>
            <Button onClick={addSeller} style={{padding:'2%', marginLeft:'3%', backgroundColor:'#dea710', width:'35%'}} variant="contained"
              >Confirm</Button>
            </DialogContent>
            </Dialog>
            <div className={clsx(classes.box1)}>
              <Paper elevation={0} className={clsx(classes.paper1)}>
                <GetTypeItem/>
              </Paper>
              {key ?
              <div className={clsx(classes.paper2)}>
                <Paper elevation={3} className={clsx(classes.paper2)} onClick={deleteData()}>  <GetItemsData/> </Paper>
              </div>:<Paper elevation={3} className={clsx(classes.paper3)}><Typography variant={"h3"}>Check the item Type to see the items</Typography></Paper>}
            </div>
        </div>
    )
}
export default HomePage;