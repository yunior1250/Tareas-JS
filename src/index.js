import './styles.css';

import { Todo, TodoList } from './classes/indexs.js';
import { crearTodoHtml } from './js/componentes';
//import { TodoList } from './classes/todo-list.class';
//import { Todo } from './classes/todo.class';

export const todoList = new TodoList();


todoList.todos.forEach(todo => crearTodoHtml(todo));


console.log('todos',todoList.todos);