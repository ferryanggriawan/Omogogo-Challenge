<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="todoModal" tabindex="-1" role="dialog" aria-labelledby="todoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="todoModalLabel">Add New Todo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row align-items-center mb-3">
                            <div class="col-4">
                                Title
                            </div>
                            <div class="col-8">
                                <input v-model="todos.title" class="form-control form-control-sm" type="text"
                                    placeholder="Title">
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-12">
                                <span class="h4">Task</span>
                            </div>
                            <div class="col-12">
                                <hr>
                            </div>
                        </div>
                        <div class="row align-items-center mb-3">
                            <div class="col-4">
                                Title Task
                            </div>
                            <div class="col-8">
                                <input v-model="todos.tasks[0].title" class="form-control form-control-sm" type="text">
                            </div>
                        </div>
                        <div class="row align-items-center mb-3">
                            <div class="col-4">
                                Description
                            </div>
                            <div class="col-8">
                                <textarea v-model="todos.tasks[0].description" class="form-control form-control-sm"
                                    rows="2"></textarea>
                            </div>
                        </div>
                        {{  todos }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                        <button @click.prevent="addTodos()" type="button" class="btn btn-primary" data-dismiss="modal">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                task: 1,
                todos: {
                    id: this.$store.getters.lastTodoId,
                    title: '',
                    status: 'On Progress',
                    tasks: [{
                        id: 1,
                        title: '',
                        description: ''
                    }]
                }
            }
        },
        methods: {
            addTask() {
                console.log(this.task);
                return this.task + 1;
            },
            addTodos() {
                this.$store.commit('addTodos', this.todos);
                this.todos = {
                    id: this.$store.getters.lastTodoId,
                    title: '',
                    status: 'On Progress',
                    tasks: [{
                        id: 1,
                        title: '',
                        description: ''
                    }]
                }
            }
        }
    }
</script>