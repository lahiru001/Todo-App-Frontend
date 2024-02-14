import TaskForm from "./TaskForm";
import TaskTray from "./TaskTray";
import Axios  from "axios";
import React, { useEffect, useState } from 'react';
const Tasks = () => {
    const[tasks,setTasks]= useState([]);
    const[updatingTask,setUpdatingTask] = useState({id:'',title:'',description:'',category:''});
    const[updatedTask,setUpdatedTask] = useState({id:'',title:'',description:'',category:''});
    const [isEdit,setIsEdit] = useState(false);
    

    useEffect(()=>{
        getTasks();
    },[]);

    const getTasks=()=>{
        Axios.get('http://localhost:3001/api/tasks')
            .then((response)=>{
                setTasks(response.data?.response||[])
            }).catch((error)=>{
                console.error("Axios error : " , error);
            });
    }

    const addTask=(data)=>{

        const payload= {
                id:data.id,
                title: data.title,
                description:data.description,
                category: data.category
            };

        Axios.post('http://localhost:3001/api/addtask',payload)
        .then((response)=>{
            console.error("Data added..." );
            getTasks();
        }).catch((error)=>{
            console.error("Axios error : " , error);
        });
    }
    
    const updateTask=(data)=>{
        const payload= {
            id:data.id,
            title: data.title,
            description:data.description,
            category: data.category
        };
        Axios.post('http://localhost:3001/api/updatetask',payload)
        .then((response)=>{
            console.error("Data updated..." );
            getTasks();
        }).catch((error)=>{
            console.error("Axios error : " , error);
        });
        setIsEdit(false);
    }
    const updateForm=(updatingTask)=>{
        setIsEdit(true);
        //
        setUpdatingTask(updatingTask);
        console.log('update form inside id'+ updatingTask.id);
        
    }

    const deleteTask = (data) => {

        Axios.post('http://localhost:3001/api/deletetask',data)
        .then((response)=>{
            console.error("Data deleted..." );
            getTasks();
        }).catch((error)=>{
            console.error("Axios error : " , error);
        });
        setIsEdit(false);
    }

    
    
    
    return (  
        <div className= "row">
            <div className= "col"><TaskForm addTask={addTask} updatingTask={updatingTask} isEdit={isEdit} updateTask = {updateTask}/></div>
            <div className= "col"><TaskTray tasks = {tasks} deleteTask={deleteTask} updateForm={updateForm} /></div>
            
        </div>
    );
}
 
export default Tasks;