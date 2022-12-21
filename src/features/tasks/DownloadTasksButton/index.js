import { useDispatch } from "react-redux";
import { fetchExapleTasks } from "../tasksSlice";
import { Button } from "./styled";

const DownloadTasksButton = ({title}) => {
  const dispatch = useDispatch();
  return (
  <Button onClick={() => dispatch(fetchExapleTasks)()}>
  {title}
 </Button>
)
}

export default DownloadTasksButton;