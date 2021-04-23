<template>
  <div class="row">
    <div
      v-for="(zacon, index) in zacons"
      :key="'id' + index"
      class="col-12 col-sm-6 pe-sm-1"
    >
      <table
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