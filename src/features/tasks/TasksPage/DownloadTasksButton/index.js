import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectDownloadState } from "../../tasksSlice";
import { StyledButton } from "../StyledButton/styled";

const DownloadTasksButton = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectDownloadState);
  return (
  <StyledButton 
  disabled= {state}
  onClick={() => dispatch(fetchExampleTasks())}
  >
    {state? "Ładowanie...." : "Pobierz przykładowe zadania"}
 </StyledButton>
)
}

export default DownloadTasksButton;