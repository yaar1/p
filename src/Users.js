import axios from 'axios';
import React, { Component } from 'react'
import URL from './URL';

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
        }
    }
    componentDidMount(){
        this.fetchUsers();
    }
    fetchUsers=async()=>{
        const config={
            header:{
                'Content-Type':'application/json'
            }
        }
        try{
            const {data}=await axios.get(`${URL}/auth`,config);
            this.setState({users:data});
        }catch(error){
            console.log(error);
        }
    }
  render() {
    return (
      <div style={{
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}>
        <div style={{
            width:'400px',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexWrap:'wrap'
        }}>
            {this.state.users?.map((user)=>{
                return (
                    <div style={{
                        width:'300px',
                        height:'fit-content',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'column',
                        border:'2px solid black',
                        borderRadius:'10px',
                    }}>
                        <span>Name : {user?.name}</span>
                        <span>Email : {user?.email}</span>
                        <span>Phone : {user?.phone}</span>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}
