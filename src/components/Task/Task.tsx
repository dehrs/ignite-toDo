import { ClipboardText, Trash } from 'phosphor-react';
import { Todo } from '../Dashboard/Dashboard';
import * as Styled from './styles';

interface TaskProps {
  handleNewTask: Todo[];
  onDeleteTask: (idTask: string) => void;
  onCheckedTask: (idTask: string) => void;
}

export function Task({
  handleNewTask,
  onDeleteTask,
  onCheckedTask,
}: TaskProps) {
  function handleDeleteTask(id: string) {
    onDeleteTask(id);
  }

  function handleCheckCompletedTask(id: string) {
    onCheckedTask(id);
  }

  return (
    <>
      {handleNewTask.length === 0 ? (
        <Styled.NoTaskContent>
          <ClipboardText size={56} color="#333333" />
          <p>
            <strong> Você ainda não tem tarefas cadastradas</strong>
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </Styled.NoTaskContent>
      ) : (
        handleNewTask.map(task => {
          return (
            <Styled.TaskContent key={task.id}>
              <Styled.CheckboxContent>
                <input
                  type="checkbox"
                  id={task.id}
                  name={task.id}
                  defaultChecked={task.isCompleted}
                  onChange={() => handleCheckCompletedTask(task.id)}
                />
                <label htmlFor={task.id}>{task.content}</label>
              </Styled.CheckboxContent>
              <button
                title="Deletar Tarefa"
                onClick={() => handleDeleteTask(task.id)}
              >
                <Trash size={24} />
              </button>
            </Styled.TaskContent>
          );
        })
      )}
    </>
  );
}
