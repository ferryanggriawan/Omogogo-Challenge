import DefaultHeader from './components/layouts/DefaultHeader';
import DefaultFooter from './components/layouts/DefaultFooter';
import AddNewTodoModal from './components/modals/AddNewTodoModal';
import AddNewTaskModal from './components/modals/AddNewTaskModal';
import DetailTodoModal from './components/modals/DetailTodosModal';
import EditTaskModal from './components/modals/EditTaskModal';

export default{
    components: {
        'default-header': DefaultHeader,
        'default-footer': DefaultFooter,
        'todo-modal': AddNewTodoModal,
        'task-modal': AddNewTaskModal,
        'detail-todo-modal': DetailTodoModal,
        'edit-task-modal': EditTaskModal,
    }
}