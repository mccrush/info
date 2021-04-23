<template>
  <div class="row">
    <div class="col-12 col-sm-6 pe-sm-1">
      <table
        v-for="zacon in zacons"
        :key="'id' + zacon.id"
        class="table table-bordered table-striped table-hover table-sm text-center"
      >
        <thead>
          <tr>
            <th>{{ zacon.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-html="zacon.text"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-12 col-sm-6 mt-2 mt-sm-0 ps-sm-1"></div>
  </div>
</template>

<script>
import zacons from '@/data/zacons'

export default {
  data() {
    return {
      zacons
    }
  }
}
</script>

<style scoped>
.duble-border {
  border-top: 4px double #212529;
}
</style>