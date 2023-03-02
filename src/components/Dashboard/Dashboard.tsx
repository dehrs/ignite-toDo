import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Header } from '../Header/Header';
import { Task } from '../Task/Task';
import uuid from 'react-uuid';
import * as Styled from './styles';

export interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function Dashboard() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  //const totalIsCompleted = todos.filter(todo => todo.isCompleted).length;
  //const totalTodos = todos.length;
  const totalTodos = todos.reduce(
    (accumulator, currentValue) => {
      if (currentValue.isCompleted) {
        accumulator.completed++;
      } else {
        accumulator.incompleted++;
      }
      accumulator.total = accumulator.completed + accumulator.incompleted;

      return accumulator;
    },
    {
      completed: 0,
      incompleted: 0,
      total: 0,
    },
  );

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const taskNew = {
      id: uuid(),
      content: newTodo,
      isCompleted: false,
    };
    setTodos([...todos, taskNew]);
    setNewTodo('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTodo(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteTask(id: string) {
    const todoDeleted = todos.filter(todo => todo.id !== id);

    setTodos(todoDeleted);
  }

  function checkedTask(id: string) {
    const completedTask = todos.map(todo =>
      todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo,
    );
    setTodos(completedTask);
  }

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <Styled.FormTaskContainer onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            name="writeTask"
            value={newTodo}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button type="submit" disabled={newTodo.length === 0}>
            Criar
            <PlusCircle size={18} weight="bold" />
          </button>
        </Styled.FormTaskContainer>

        <Styled.TaskContainer>
          <Styled.TaskCount>
            <Styled.SpanContent isCompleted={false}>
              <span>Tarefas Criadas</span>
              <span>{totalTodos.total}</span>
            </Styled.SpanContent>

            <Styled.SpanContent isCompleted>
              <span>Concluídas</span>
              <span>
                {totalTodos.total > 0
                  ? totalTodos.completed + ' de ' + totalTodos.total
                  : 0}
              </span>
            </Styled.SpanContent>
          </Styled.TaskCount>
          <Task
            handleNewTask={todos}
            onDeleteTask={deleteTask}
            onCheckedTask={checkedTask}
          />
        </Styled.TaskContainer>
      </Styled.Wrapper>
    </>
  );
}
