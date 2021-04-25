<template>
  <div class="row">
    <div class="col-12 col-sm-6">
      <label for="inputNum" class="form-label">Введите число</label>
      <input
        type="text"
        id="inputNum"
        class="form-control"
        placeholder="Исходное число"
        v-model.trim="inputNum"
        @input="calculate"
      />
      <br />
      <p class="mb-2">Исходная система счисления</p>
      <div class="w-100 border">
        <div
          class="d-inline-flex justify-content-around me-0 mt-2 w-25"
          v-for="ss in 15"
          :key="'id' + ss"
        >
          <input
            type="radio"
            class="btn-check"
            name="inputSS"
            :id="'option' + ss"
            autocomplete="off"
            v-model="inputSS"
          />
          <label
            class="inputSS btn btn-outline-dark w-75"
            :for="'option' + ss"
            >{{ ss + 1 }}</label
          >
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 mt-4 mt-sm-0">
      <label for="resultNum" class="form-label">Резуьтат</label>
      <div class="input-group">
        <input
          type="text"
          id="resultNum"
          class="form-control"
          v-model="resultNum"
          aria-describedby="button-addon2"
        />
        <button class="btn btn-outline-secondary" id="button-addon2">
          Copy
        </button>
      </div>
      <br />
      <p class="mb-2">Перевести в систему счисления</p>
      <div class="w-100 border">
        <div
          class="d-inline-flex justify-content-around me-0 mt-2 w-25"
          v-for="ss in 15"
          :key="'idr' + ss"
        >
          <input
            type="radio"
            class="btn-check"
            name="resultSS"
            :id="'optionr' + ss"
            autocomplete="off"
            v-model="resultSS"
          />
          <label
            class="inputSS btn btn-outline-dark w-75"
            :for="'optionr' + ss"
            >{{ ss + 1 }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNum: '',
      resultNum: '',
      inputSS: '',
      resultSS: ''
    }
  },
  methods: {
    calculate() {
      this.resultNum = this.inputNum
    }
  }
}
</script>

<style scoped>
</style>