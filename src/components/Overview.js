const Overview = (props) => {
  const { tasks } = props;
  const { deleteBtn } = props;
  const { editBtn } = props;
  return (
    <ul>
      {tasks.map((task, i) => {
        return (
          <div>
            <li key={task.id}>
              {i + 1}) {task.text}
              <button onClick={() => deleteBtn(task)}>Delete</button>
              <button onClick={() => editBtn(task)}>Edit</button>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
