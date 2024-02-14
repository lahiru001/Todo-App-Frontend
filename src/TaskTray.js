import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function TaskTray({tasks,deleteTask,updateForm}) {

  const getCatColor = function CatColor(cat){
    switch(cat){
      case 'primary':
       return 'success';
      break;
      case 'secondary':
        return 'warning';
      break;
      case 'normal':
        return 'primary';
      break;
      default: 
        return 'secondary';
    }
  }

  
  return (
    <Row xs={1} md={2} className="g-4" >
      {tasks.map((task) => (
        <Card key={task.id} style={{backgroundColor: '#f0f0f0',marginLeft:'10px'}} >
          <Col >
          <Card bg={getCatColor(task?.category)} text={'white'}>
            
            <Card.Body>
              <Card.Title>{task?.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{task?.category}</Card.Subtitle>
              <Card.Text>
                {task?.description}
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
        <div style={{marginTop:'20px'}}>
          <Button variant="outline-warning" onClick={()=>{updateForm(task)}}>Update</Button>{' '}
          <Button variant="outline-danger" onClick={()=>{deleteTask({id:task?.id})}}>Delete</Button>{' '}
        </div>
        </Card>
        
      ))}
    </Row>
  );
}

export default TaskTray;