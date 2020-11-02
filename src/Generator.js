import React, {useState} from "react"
import {connect} from "react-redux"
import {listeyeEkle2, isaretle2, temizle2,handleChange} from "./actions/actionTypes"
import './App.css';
import {Card, CardBody, CardHeader, Input } from "reactstrap"


const Generator=(props)=>{
    const [text2, setText]=useState("");
    const [event, setSelect]=useState("");
   
        return (
            <div>
                <Card style={{width:"300px",marginLeft:"110px", border:"2px solid black"}}>
        <CardHeader >
  <input placeholder="Decrypt" value={text2} onChange={e=>setText(e.target.value) } />
        <button onClick={()=>{
          setText("")
          props.listeyeEkle2(text2)}}>+</button>
          <Input type="select" name="generator" id="generator" value={event} onChange={(event)=>{setSelect(event.target.value);
          props.handleChange(event)}}>
            <option></option>
            <option>RC4</option>
            <option>Rabbit</option>
            
            <option>AES</option>
            <option>DES</option>
            <option>TripleDES</option>
          </Input>
        </CardHeader >
        <CardBody style={{backgroundColor:"orange"}}>
          <div className="liste2">
      {props.liste2.map(item =>(
        <div onClick={()=>props.isaretle2(item.id)} key={item.id} style={{color:"white"}} className={item.tamamlandi?"yapildi":""}>
          <strong><h5>
            {item.baslik}
          </h5>
            
          </strong>
          </div>
      ) )}
    </div>
      
   
        </CardBody>
        <button onClick={()=>props.temizle2()} className="temizle">Delete The Completed</button>
      </Card>
            </div>
        )
    }

const mapStateToProps= state=>{
    return {
      liste2:state.liste2,
      forms:state.forms
    }
  }
  
  export default connect(mapStateToProps,{listeyeEkle2, isaretle2, temizle2, handleChange} )(Generator);