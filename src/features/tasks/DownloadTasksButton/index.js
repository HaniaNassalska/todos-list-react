import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { Button } from "../../styledButton";

const DownloadTasksButton = ({title}) => {
  const dispatch = useDispatch();
  return (
  <Button onClick={() => dispatch(fetchExampleTasks())}>
  {title}
 </Button>
)
}

export default DownloadTasksButton;