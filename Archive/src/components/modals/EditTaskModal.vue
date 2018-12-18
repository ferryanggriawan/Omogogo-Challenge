<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="editTaskModal" tabindex="-1" role="dialog" aria-labelledby="editTaskModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editTaskModalLabel">Edit Task</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row align-items-center mb-3">
                            <div class="col-4">
                                Title Task {{ active }} {{ activeTask }}
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
                        <button @click="editTask()" type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // data(){
        //     return {
        //         active: this.$store.getters.active,
        //         activeTask: this.$store.getters.activeTask
        //     }
        // },
        computed: {
            lastTaskId()
            {
                return this.$store.getters.lastTaskId;
            },
            active()
            {
                return this.$store.getters.active
            },
            activeTask()
            {
                return this.$store.getters.activeTask
            },
            tasks()
            {
                return this.$store.getters.todos[this.active].tasks[this.activeTask]
            },
            test()
            {
                return this.tasks;
            }
        },
        methods: {
            editTask()
            {
                this.$store.commit('editTask', this.tasks);
            }
        }
    }
</script>

<style>

</style>