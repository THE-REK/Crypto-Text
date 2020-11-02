import React, {useState} from "react"
import {connect} from "react-redux"
import {listeyeEkle, isaretle, temizle, handleChange} from "./actions/actionTypes"
import './App.css';
import {Card, CardBody, CardHeader, Col,  Input, Row, } from "reactstrap"
import Generator from "./Generator"



const App=(props)=> {
  const [text, setText]=useState("");
  const [event, setSelect]=useState("")
  
  return (
    <div className="App" > 
    <h1 style={{color:"green"}}>Crypto Text
    </h1>
    
    <div className="ekleme_formu" style={{marginTop:"250px"}}>
      <Row>
        <Col xs="6"><Card style={{width:"300px",marginLeft:"300px",border:"2px solid black"}}>
        <CardHeader >
  <input placeholder="Encrypt" value={text} onChange={e=>setText(e.target.value) } />
        <button onClick={()=>{
          setText("")
          props.listeyeEkle(text)}}>+</button>
          <Input type="select" name="generator" id="generator" value={event} onChange={(event)=>{setSelect(event.target.value);
          props.handleChange(event)}}>
            <option></option>
            <option>RC4</option>
            <option>Rabbit</option>
            
            <option>AES</option>
            <option>DES</option>
            <option>TripleDES</option>
          </Input>
          
          
        </CardHeader>
        <CardBody style={{backgroundColor:"orange"}}>
          <div className="liste">
      {props.liste.map(item =>(
        <div onClick={()=>props.isaretle(item.id)} key={item.id} style={{color:"white"}} className={item.tamamlandi?"yapildi":""}>
          <strong><h5>
            {item.baslik}
          </h5>
            
          </strong>
          </div>
      ) )}
    </div>
      
   
        </CardBody>
        
        <button onClick={()=>props.temizle()} className="temizle">Delete The Completed</button>
      </Card></Col>
        <Col xs="6"><Generator/></Col>
      </Row>
      
      </div>
     
      <div style={{marginTop:"300px"}}><h1 style={{color:"green"}}>Crypto Text</h1></div>
    </div>
    
  );
}


const mapStateToProps= state=>{
  return {
    liste:state.liste,
    forms:state.forms
  }
}

export default connect(mapStateToProps,{listeyeEkle, isaretle, temizle, handleChange} )(App);
