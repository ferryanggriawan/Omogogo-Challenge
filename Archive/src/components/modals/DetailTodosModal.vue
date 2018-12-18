<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="detailtodoModal" tabindex="-1" role="dialog" aria-labelledby="detailtodoModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="detailtodoModalLabel">Detail Todo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body bg-light">
                        <div class="row align-items-center mb-3">
                            <div class="col-4">
                                Title
                            </div>
                            <div class="col-8">
                                <label class="m-0">{{ activeTodos.title }}</label>
                            </div>
                        </div>
                        <div class="row align-items-center mb-3">
                            <div class="col-4">
                                Status
                            </div>
                            <div class="col-8">
                                <div class="form-check d-inline-block mr-2">
                                    <input name="status" class="form-check-input" type="radio" v-model="activeTodos.status" value="On Progress" id="onProgress">
                                    <label class="form-check-label" for="onProgress">
                                        On Progress
                                    </label>
                                </div>
                                <div class="form-check d-inline-block mr-2">
                                    <input name="status" class="form-check-input" type="radio" v-model="activeTodos.status" value="Completed" id="completed">
                                    <label class="form-check-label" for="completed">
                                        Completed
                                    </label>
                                </div>
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
                            <template v-for="(val, i) in activeTodos.tasks">
                                <div :key="i" class="col-6 py-2">
                                    <div class="card shadow-sm p-3">
                                        <div class="d-flex">
                                            <span class="m-0 mb-2 h5"> {{ val.title }} </span>
                                            <a @click="deleteTask(i)" href="#" class="btn btn-sm btn-danger py-1 ml-auto">
                                                <i class="fa fa-trash"></i>
                                            </a>
                                        </div>
                                        <p class="m-0">
                                            {{ val.description }}
                                        </p>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            active()
            {
                return this.$store.getters.active
            },
            activeTodos() 
            {
                return this.$store.getters.todos[this.active]
            }
        },
        methods: {
            deleteTask(active) {
                this.$store.commit('deleteTask', active)
            }
        }
    }
</script>