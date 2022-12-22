import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectDownloadState } from "../tasksSlice";
import { Button } from "../../styledButton";

const DownloadTasksButton = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectDownloadState);
  return (
  <Button 
  disabled= {state}
  onClick={() => dispatch(fetchExampleTasks())}
  >
    {state? "Ładowanie...." : "Pobierz przykładowe zadania"}
 </Button>
)
}

export default DownloadTasksButton;