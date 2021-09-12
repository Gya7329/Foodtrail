import {makeStyles} from '@material-ui/core'


export const useStyles=makeStyles((theme)=>({
root:{

height: '100vh',
display:'flex',
flexDirection:'column',

},
red:{
backgroundColor: '#ff2040',
color :'#ffffff',

},
navy:{
backgroundColor:'#003080',


},
cards:{
display:'flex',
justifyContent:'center',
alignItems:'center',

 
},
card:{
margin:10,


},
space:{
padding:20,

},
media:{
width:200

},


main:{
flex :1,
overflow :'auto',
flexDirection :'column',
display:'flex',
color:'#fffff',


},
center:{
display :'flex',
justifyContent:'center',
alignItems :'center',
textAlign:'center',


},
green:{
backgroundColor:'#00b020',

},



largeLogo:{
height:100,

},



}))