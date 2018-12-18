<template>
  <div>
    <div class="row">
      <template v-for="(val, i) in todos">
        <div :key="i" class="col-4 mb-3">
          <div class="card shadow-sm">
            <div class="card-title d-flex flex-row align-items-center">
              <span class="align-self-center w-50 text-primary">
                <a @click="setActive(i)" href="#detailtodoModal" data-toggle="modal" data-target="#detailtodoModal"> {{ val.title }} </a>
              </span>
              <div class="ml-auto">
                <button @click="setActive(i)" type="button" class="btn btn-sm btn-outline-success mr-1 px-2" data-toggle="modal" data-target="#taskModal">
                  <i class="fa fa-plus"></i>
                </button>
                <button @click="deleteTodos(i)" type="button" class="btn btn-sm btn-outline-danger px-2">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
            <div class="card-body py-0">
              <ul class="list-group list-group-flush">
                <template v-for="(task, j) in val.tasks">
                  <li :key="j" class="list-group-item px-0">
                    <div class="d-flex align-items-center">
                      <span class="m-0">{{ task.title }}</span>
                      <a @click="setActive(i); setActiveTask(j);" href="#editTaskModal" class="ml-auto btn btn-sm btn-info" data-toggle="modal" data-target="#editTaskModal">
                        <i class="fa fa-pen"></i>
                      </a>
                    </div>
                  </li>
                </template>
              </ul>
            </div>
            <div class="card-footer text-center text-secondary">
              {{ val.status }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      todos(){
        return this.$store.getters.todos;
      }
    },
    methods: {
      setActive(active)
      {
        this.$store.commit('setActive', active);
      },
      setActiveTask(active)
      {
        this.$store.commit('setActiveTask', active);
      },
      deleteTodos(active)
      {
        this.$store.commit('deleteTodos', active);
      }
    }
  }
</script>