import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import URL from './URL'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      phone:'',
      error:'',
      success:'',
    }
  }
  handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(this.state.name,this.state.email,this.state.phone);
    const config={
      header:{
        'Content-Type':'application/json'
      }
    }
    var body={
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone
    }
    try{
      const {data}=await axios.post(`${URL}/auth`,body,config);
      console.log(data);
      this.setState({name:'',email:'',phone:''});
      this.setState({sucess:'User created Successfully'});
      this.setState({error:''})
    }catch(error){
      console.log(error);
        this.setState({success:''})
      this.setState({error:error.response.data.message?error.response.data.message:error.response.data});
    }
  }
  render() {
    return (
      <div style={{
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <div style={{
          width:'fit-content',
          height:'fit-content',
        }}>
          <form onSubmit={this.handleSubmit} style={{
            width:'300px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            gap:'20px'
          }}>
            <input type="text"  placeholder='Name' value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
            <input type="text"  placeholder='Email' value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
            <input type="text"  placeholder='Phone' value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}}/>
            <input type="submit" value="Submit"/>

            <span style={{color:'red'}}>{this.state.error}</span>
            <span style={{color:'green'}}>{this.state.sucess}</span>
          </form>
          <button><Link to='/users'>User List</Link></button>
        </div>
      </div>
    )
  }
}