<template>
  <div class="row">
    <div class="col-12 pt-4">
      <h4>Степени чисел</h4>
      <div class="row">
        <div class="col-12 col-sm-6">
          <input
            type="number"
            class="form-control"
            v-model.number="inputNum"
            min="1"
            max="99"
            step="1"
          />
          <div id="resultNumHelp" class="form-text mb-3">
            Введите число
            <small title="MAX 99">(MAX 99)</small>
          </div>
          <div class="d-block d-sm-none">
            <input
              type="number"
              class="form-control"
              v-model.number="inputStep"
              min="1"
              max="99"
              step="1"
            />
            <div id="resultNumHelp" class="form-text mb-3">
              Введите степень <strong>n</strong>&nbsp;
              <small title="MAX 99">(MAX 99)</small>
            </div>
          </div>
          <table
            class="table table-bordered table-striped table-hover table-sm"
          >
            <thead>
              <tr>
                <th class="w-50">n</th>
                <th>{{ inputNum }}<sup>n</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in podStep1" :key="n + 'id'">
                <td>{{ n }}</td>
                <td>{{ Math.pow(inputNum, n).toLocaleString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12 col-sm-6">
          <div class="d-none d-sm-block">
            <input
              type="number"
              class="form-control"
              v-model.number="inputStep"
              min="1"
              max="99"
              step="1"
            />
            <div id="resultNumHelp" class="form-text mb-3">
              Введите степень <strong>n</strong>&nbsp;
              <small title="MAX 99">(MAX 99)</small>
            </div>
          </div>
          <table
            class="table table-bordered table-striped table-hover table-sm"
          >
            <thead>
              <tr>
                <th class="w-50">n</th>
                <th>{{ inputNum }}<sup>n</sup></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m in podStep1" :key="m + 'id'">
                <td>{{ m + podStep1 }}</td>
                <td>{{ Math.pow(inputNum, m + podStep1).toLocaleString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNum: 2,
      inputStep: 16
    }
  },
  computed: {
    podStep1() {
      if (this.inputStep % 2 === 0) {
        return this.inputStep / 2
      } else {
        return Math.trunc(this.inputStep / 2) + 1
      }
    }
  }
}
</script>