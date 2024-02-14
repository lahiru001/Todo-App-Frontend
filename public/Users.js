import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import  Axios  from "axios";
import { useEffect, useState } from "react";

const Users = () => {
   const[users,setUsers] = useState([]);
   const[submitted, setSubmitted] = useState(false);
   const[isEdit,setIsEdit] = useState(false);
   const[selectedUser,setSelectedUser] = useState({});
   

   useEffect(()=>{
      getUsers();
   },[]);

   const getUsers =()=>{
      Axios.get('http://localhost:3001/api/users')
         .then((response) => {
           // console.log();
            setUsers(response.data?.response||[]);
         }).catch((err) => {
            console.error("Axios error : " , err);
         });
   }
   const addUser =(data)=>{
      setSubmitted(true);
      const payload = {
         id: data.id,
         name: data.name
      };
      
      Axios.post('http://localhost:3001/api/createuser',payload)
         .then(() => {
            getUsers();
            setSubmitted(false);
            setIsEdit(false);
         }).catch((err) => {
            console.error("Axios error : " , err);
         });
   }  
   
   const updateUser =(data)=>{
      setSubmitted(true);
      const payload = {
         id: data.id,
         name: data.name
      };
      
      Axios.post('http://localhost:3001/api/updateuser',payload)
         .then(() => {
            getUsers();
            setSubmitted(false);
            setIsEdit(false);
         }).catch((err) => {
            console.error("Axios error : " , err);
         });
   }

   const deleteUser =(data)=>{
      
      
      
      Axios.post('http://localhost:3001/api/deleteuser',data)
         .then(() => {
            getUsers();
         }).catch((err) => {
            console.error("Axios error : " , err);
         });
   }

   return (
      <Box>
          <UserForm addUser={addUser} updateUser = {updateUser} submitted={submitted} data={selectedUser} isEdit={isEdit} />
          <UsersTable rows={users} selectedUser = {data=>{
              setSelectedUser(data);
               
               setIsEdit(true);
          }}
          deleteUser={
            data=>window.confirm("Are you sure to delete this record?")&& deleteUser(data)
          
         }
          />
      </Box>
   );
}
 
export default Users;