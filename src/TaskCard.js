import Card from 'react-bootstrap/Card';

function TaskCard({task}) {
  return (
    <Card style={{ margin:'20px'}}>
      <Card.Body>
        <Card.Title>{task.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{task.category}</Card.Subtitle>
        <Card.Text>
          {task.description}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;