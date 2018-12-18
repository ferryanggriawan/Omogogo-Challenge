<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="taskModalLabel">Add New Task</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row align-items-center mb-3">
                            <div class="col-4">
                                Title Task
                            </div>
                            <div class="col-8">
                                <input v-model="tasks.title" class="form-control form-control-sm" type="text">
                            </div>
                        </div>
                        <div class="row align-items-center mb-3">
                            <div class="col-4">
                                Description
                            </div>
                            <div class="col-8">
                                <textarea v-model="tasks.description" class="form-control form-control-sm" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button @click="addTask()" type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tasks: {
                    id: this.$store.getters.lastTaskId,
                    title: '',
                    description: ''
                },
                active: this.$store.getters.active
            }
        },
        computed: {
            lastTaskId()
            {
                return this.$store.getters.lastTaskId;
            }
        },
        methods: {
            addTask()
            {
                this.$store.commit('addTask', this.tasks);
                this.tasks = {
                    id: this.$store.getters.lastTaskId,
                    title: '',
                    description: ''
                };
            }
        }
    }
</script>

<style>

</style>