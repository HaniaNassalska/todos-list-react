import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import TaskPageSection from "./TaskPageSection";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id))

  return (
    <Container>
      <Header title={"Szczegóły zadania"} />
      {task ?
        <TaskPageSection
          title={task.content}
          body={
            <>
              <strong>Ukończone:</strong> {task.done ? "Tak" : "Nie"}
            </>
          }
        />
        : <TaskPageSection
          title="Nie znaleziono zadania 😢"
        />}

    </Container>
  );
}

export default TaskPage;
