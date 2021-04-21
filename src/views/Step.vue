<template>
  <div class="row">
    <div class="col-12 pt-4">
      <h2>Степени двойки</h2>
      <input
        class="form-range w-100"
        type="range"
        min="0"
        max="32"
        step="1"
        v-model.number="step"
      />
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th class="w-50">n</th>
            <th>2<sup>n</sup></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr v-for="n in step" :key="n + 'id'">
            <td>{{ n }}</td>
            <td>{{ Math.pow(2, n).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 6
    }
  }
}
</script>