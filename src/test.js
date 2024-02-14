import Table from 'react-bootstrap/Table';
import Tasks from './Tasks';

function TaskTable({tasks}) {
    console.log(tasks[1]);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default TaskTable;
