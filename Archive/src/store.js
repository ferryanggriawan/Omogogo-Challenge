import Vue from 'vue'
import Vuex from 'vuex'
import State from './stores/state';

Vue.use(Vuex)

export default new Vuex.Store({
  state: State,
  getters: 
  {
    active(state)
    {
      return state.active;
    },
    activeTask(state)
    {
      return state.activeTask;
    },
    todos(state)
    {
      return state.todos;
    },
    lastTodoId(state)
    {
      return state.todos[state.todos.length - 1].id + 1;
    },
    lastTaskId(state)
    {
      const lastArray = state.todos[state.active].tasks.length - 1;
      return state.todos[state.active].tasks[lastArray].id + 1;
    }
  },
  mutations: 
  {
    setActive(state, payload)
    {
      state.active = payload;
    },
    setActiveTask(state, payload)
    {
      state.activeTask = payload
    },
    addTodos(state, payload)
    {
      state.todos.push(payload);
    },
    addTask(state, payload)
    {
      state.todos[state.active].tasks.push(payload);
    },
    deleteTodos(state, payload)
    {
      state.todos.splice(payload, 1);
    },
    deleteTask(state, payload)
    {
      state.todos[state.active].tasks.splice(payload, 1);
    },
    editTask(state, payload)
    {
      state.todos[state.active].tasks[state.activeTask] = payload;
    }
  },
  actions: 
  {
    
  }
})
