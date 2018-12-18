<template>
  <div id="app">
    <default-header></default-header>

    <div class="fluid-container px-3 py-5">
      <router-view/>
    </div>
    
    <default-footer></default-footer>

    <todo-modal></todo-modal>
    <task-modal></task-modal>
    <detail-todo-modal></detail-todo-modal>
    <edit-task-modal></edit-task-modal>
  </div>
</template>

<style lang="scss">
@import "assets/scss/bootstrap.scss";
</style>
