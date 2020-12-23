import React,{useEffect,useState} from 'react';
import {FaHashtag,FaPaw,FaComment} from 'react-icons/fa';
import {AiFillMessage,AiFillHome,AiFillBell} from 'react-icons/ai';
import {GiSittingDog} from 'react-icons/gi';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {IoCreateOutline} from 'react-icons/io5';
import {motion} from "framer-motion";
import firebase from "../configs/firebaseConfig";



/////Motion animation
const titleVariant={
    show:{
        color:'#7B241C'
    }
}

const childVariant={
    show:{
        opacity:1
    }
}
//////////////

function Home() {

    const [posts,setPosts]=useState([]);
   

    useEffect(()=>{
        var leadsRef = firebase.database().ref('users');
        
    leadsRef.orderByChild('followedBy/me').equalTo(true).on('value', function(snapshot) {
        let data=[];
        snapshot.forEach(function(childSnapshot) {
          data=[...data,childSnapshot.val()['posts']];
        });
        
       let data1=[];
        data.map((item)=>{
            Object.keys(item).map(function(key) {
                data1=[...data1,item[key]];
              });
        });
        setPosts(data1);
        return(()=>{
            data=null; 
            data1=null
        })
    });
       },[]);


    
    return (
        <div style={styles.mainHome}>
          <div style={styles.mainTab}>
           <div style={styles.tabBar}>
            <motion.div variants={titleVariant} whileHover="show" style={{textAlign:'center'}}><AiFillHome size={30} color="#5DADE2" style={styles.iconsStyle}/><motion.h5 variants={childVariant} className="titleshome" initial="hidden">Home</motion.h5></motion.div>
            <motion.div variants={titleVariant} whileHover="show" style={{textAlign:'center'}}><FaHashtag size={30} style={styles.iconsStyle}/><motion.h5 variants={childVariant} className="titleshome" >Search</motion.h5 ></motion.div>
            <motion.div variants={titleVariant} whileHover="show" style={{textAlign:'center'}}><AiFillBell size={30}  style={styles.iconsStyle}/><motion.h5 variants={childVariant} className="titleshome" >Notofications</motion.h5></motion.div>
            <motion.div variants={titleVariant} whileHover="show" style={{textAlign:'center'}}><GiSittingDog size={30}  style={styles.iconsStyle}/><motion.h5 variants={childVariant} className="titleshome" >Profile</motion.h5></motion.div>
            <motion.div variants={titleVariant} whileHover="show" style={{textAlign:'center'}}><AiFillMessage size={30} style={styles.iconsStyle}/><motion.h5 variants={childVariant}className="titleshome">Messages</motion.h5></motion.div>
            <motion.div variants={titleVariant} whileHover="show" style={{textAlign:'center'}}><BsFillBookmarkFill size={30}  style={styles.iconsStyle}/><motion.h5 variants={childVariant} className="titleshome">Saved</motion.h5></motion.div>
            <div style={{textAlign:'center'}}><IoCreateOutline size={30} color="white" style={styles.createPost}/></div>
           </div>
           <div style={styles.vLine}/>
           <div>
               <h2 style={{margin:'10px 30px'}}>Home</h2>
               <div style={styles.hLine}/>
               <div className="mainContent" style={styles.mainContent}>
               {posts.map((item,index)=>{
                   return(
                       <div key={index+"1"}>
                           <div style={styles.profileHeader}><img style={styles.profImage} src={item.image}/><h4 style={styles.profileName}>{item.name}</h4></div>
                           <p style={{width:"550px",marginBottom:'20px'}}>{item.content}</p>
                           <img style={styles.feedImage} src={item.image}/>
                           <div style={styles.reactBar}><div style={{...styles.reactBar,marginRight:'10px',cursor:'pointer'}}><FaPaw color={item.liked?"#C0392B":'black'} size={20}/><h4 style={{color:item.liked?"#C0392B":'black',marginLeft:'6px'}}>Paw</h4></div>
                           <div style={{...styles.reactBar,cursor:'pointer'}}><FaComment style={{marginLeft:'20px'}} size={20}/><h4 style={{marginLeft:'6px'}}>Comments</h4></div></div>
                           <div style={{...styles.hLine,width:'500px',margin:'20px 0px'}}/>
                       </div>
                   );
               })}
               </div>
           </div>
           <div style={styles.vLine}/>
           </div>
        </div>
    )
}

export default Home;

const styles={
    mainHome:{
        height:"100%"
    },
    tabBar:{
        display: "flex",
        flexDirection: "column",
        margin: "10px 50px",
        
    },
    iconsStyle:{
        padding:"5px",
        cursor: "pointer"
    },
    createPost:{
        backgroundColor:"#5DADE2",
        padding:"10px",
        borderRadius:"50%",
        marginTop:"40px",
        textAlign:"center"
    },
    mainTab:{
        display:"flex",
        flexDirection:"row",
        position:'fixed'
    },
    vLine:{
        height:"100vh",
        width:"1px",
        backgroundColor:"#CACFD2",
    },
    mainContent:{
        position: "absolute",
        marginLeft:'30px',
        overflowY: "scroll",
        top: "70px",
        bottom:'20px',
        width:'650px',
    },
    hLine:{
        width: '700px',
        height:'1px',
        backgroundColor:"#CACFD2"
    },
    feedImage:{
        width:'400px',
        height:'100%'
    },
    profImage:{
        width:'50px',
        height:'50px',
        borderRadius:'25px',
        margin: '15px',
        cursor:'pointer'
    },
    profileHeader:{
        display:'flex',
        alignItems:'center'
    },
    profileName:{
        color:'#5DADE2',
        textDecoration: "underline",
        cursor:'pointer'
    },
    reactBar:{
        display:'flex',
        alignItems:'center',
        marginTop:'10px'
    }
 }

