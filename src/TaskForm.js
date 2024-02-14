import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function TaskForm({addTask,updatingTask,isEdit,updateTask}) {
  
  const [newId,setNewId] = useState(0);
  const [title,setTitle] = useState('');  
  const [description,setDescription] = useState('');
  const [category,setCategory] = useState('');
  const [updatedTask,setUpdatedTask]=useState({id:'',title:'',description:'',category:''});

  useEffect(()=>{
    if(isEdit){
      console.log('new updated use effect'+ updatingTask?.title);
      setTitle(updatingTask?.title);
      setDescription(updatingTask?.description);
      setCategory(updatingTask?.category);
    }
    
  },[isEdit]);

  useEffect(()=>{
    if(!isEdit){
      
    }
  },[isEdit]);
  
  return (
    <div className="p-4" style={{ backgroundColor: '#f0f0f0', maxWidth: '500px'}}> {/* Add padding to the whole form */}
      <Form style={{ maxWidth: '500px' }} >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add Title</Form.Label>
          <Form.Control type="text" placeholder="Enter task title1" onChange={(e)=>setTitle(e.target.value)} value={title}/>
          <Form.Text className="text-muted">
          
        </Form.Text>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter about task" as="textarea" rows={3} onChange={(e)=>setDescription(e.target.value)} value={description}/>
        </Form.Group> 

        <Form.Select 
          aria-label="Default select example" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}> {/* Change to onChange */}
          <option>Select Level</option>
          <option value="primary">Top Level</option>
          <option value="secondary">Middle Level</option>
          <option value="normal">Normal Level</option>
        </Form.Select>

    <Button 
  variant="primary" 
  type="button" 
  style={{ margin: '10px' }} 
  onClick={() => {
    
    if(!isEdit){

      setNewId(newId+1);
      const newTask = {
      
        id: newId,
        title: title,
        description: description,
        category: category
      };
      console.log(newTask); 
      
      addTask(newTask);
      
    }else{
      const newTask= {
      
        id: updatingTask.id,
        title: title,
        description: description,
        category: category
      };
      updateTask(newTask); 
    }
    setTitle('');
    setDescription('');
    setCategory('');
  }}
>
  {isEdit ? 'Update':'Add Task'}
</Button>

      </Form>
    </div>
  );
}

export default TaskForm;
