<template>
  <div id="graph">
    <h5>
      Редактор графов
      <small class="text-muted"
        ><small>(работает в тестовом режиме)</small></small
      >
    </h5>
    <p class="small">
      Один клик по полю - добавление вершины<br />
      Поочередный клик по вершинам - рисование ребра<br />
      Двойной клик по вершине - переименование
      <small>(для завершения, нажать Enter или кликнуть по полю)</small><br />
      (остальные операции в процессе разработки)
    </p>
    <!-- <div>RectX {{ rectX }}, rectY {{ rectY }}</div> -->
    <!-- <div>texts: {{ texts }}</div> -->
    <div id="graphPole" class="rounded-2 border">
      <svg
        version="1.1"
        baseProfile="full"
        width="100%"
        height="350"
        xmlns="http://www.w3.org/2000/svg"
        @click.self="addPoint"
        id="pole"
      ></svg>
    </div>
    <div class="d-flex justify-content-between">
      <button class="btn btn-sm btn-dark mt-2" @click="clearPole">
        Очистить поле
      </button>
      <button
        class="btn btn-sm mt-2"
        @click="removeMode = !removeMode"
        :class="{ 'btn-outline-danger': !removeMode, 'btn-danger': removeMode }"
      >
        Режим удаления
      </button>
      <div class="bg-light border rounded-2 mt-2 p-0 pt-1 ps-2 pe-2 small">
        Вершин {{ points.length }}, ребер {{ lines.length }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 350,
      radius: 14,
      poleEl: null,
      editMode: false,
      removeMode: false,
      lineStart: null,
      lineEnd: null,
      lines: [],
      points: [],
      texts: []
    }
  },
  mounted() {
    this.poleEl = document.getElementById('pole')
    this.graphPoleEl = document.getElementById('graphPole')
  },
  computed: {},
  methods: {
    addPoint(e) {
      if (!this.editMode) {
        const cx = e.offsetX
        const cy = e.offsetY

        const point = { x: cx, y: cy }
        this.points.push(point)

        const textContent = this.points.length
        const text = { x: cx, y: cy, text: textContent }
        this.texts.push(text)
        this.draw()
      } else {
        this.editMode = false
      }
    },
    drawPoint() {
      this.points.forEach((item, index) => {
        const pointEl = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'circle'
        )
        pointEl.setAttribute('cx', item.x)
        pointEl.setAttribute('cy', item.y)
        pointEl.setAttribute('r', this.radius)
        pointEl.setAttribute('fill', 'white')
        pointEl.setAttribute('stroke', '#8E44AD')
        pointEl.setAttribute('stroke-width', '3')
        pointEl.setAttribute('stroke-opacity', '0.8')

        // Create Text
        const textEl = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'text'
        )
        textEl.setAttribute('x', item.x)
        textEl.setAttribute('y', item.y)
        textEl.setAttribute('fill', '#000000')
        textEl.setAttribute('font-family', 'sans-serif')
        textEl.setAttribute('font-size', '14')
        textEl.setAttribute('text-anchor', 'middle')
        textEl.setAttribute('stroke-width', '1')
        textEl.setAttribute('stroke', '#000000')
        textEl.setAttribute('dy', '.35em')
        textEl.style.userSelect = 'none'
        textEl.textContent = this.texts[index].text

        // Create foreignObject
        const foreignEl = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'foreignObject'
        )
        foreignEl.setAttribute('x', item.x - 12)
        foreignEl.setAttribute('y', item.y - 12)
        foreignEl.setAttribute('width', 24)
        foreignEl.setAttribute('height', 24)
        foreignEl.setAttribute('id', 'foreign' + index)
        foreignEl.style.display = 'none'

        // Create inputEl
        const inputEl = document.createElementNS(
          'http://www.w3.org/1999/xhtml',
          'input'
        )
        inputEl.setAttribute('type', 'text')
        inputEl.setAttribute('id', 'inputEl' + index)
        inputEl.setAttribute('maxlength', '2')
        inputEl.style.width = '100%'
        inputEl.style.height = '100%'
        inputEl.style.textAlign = 'center'
        inputEl.style.fontSize = '14px'
        //inputEl.style.border = '4px solid red'

        // Create Grpup
        const groupEl = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'g'
        )
        groupEl.style.cursor = 'pointer'

        foreignEl.append(inputEl)
        groupEl.append(pointEl)
        groupEl.append(textEl)
        groupEl.append(foreignEl)
        this.poleEl.append(groupEl)

        groupEl.addEventListener('click', () => {
          if (this.removeMode) {
            this.removePoint(index, item.x, item.y)
          } else {
            this.addLine(item.x, item.y)
          }
        })

        groupEl.addEventListener('dblclick', () => {
          this.renamePoint(index)
        })
      })
    },
    removePoint(index, x, y) {
      console.log('remove index:', index)
      this.points.splice(index, 1)
      this.texts.splice(index, 1)
      if (this.lines.length) {
        this.removeLineFromPoint(x, y)
      } else {
        this.draw()
      }
    },
    removeLineFromPoint(x, y) {
      this.lines = this.lines.filter(
        item => item.x1 != x && item.y1 != y && item.x2 != x && item.y2 != y
      )
      this.draw()
    },
    removeLineSelf(x1, x2, y1, y2) {
      this.lines = this.lines.filter(
        item =>
          (item.x1 != x1 && item.y1 != y1) || (item.x2 != x2 && item.y2 != y2)
      )
      this.draw()
    },
    renamePoint(index) {
      this.editMode = true
      const foreignElEdit = document.getElementById('foreign' + index)
      foreignElEdit.style.display = 'block'

      const inputElEdit = foreignElEdit.firstChild
      inputElEdit.focus()
      inputElEdit.addEventListener('keydown', e => {
        if (e.keyCode === 13) {
          this.texts[index].text = inputElEdit.value
          foreignElEdit.style.display = 'none'
          this.draw()
          this.editMode = false
        }
      })
      inputElEdit.addEventListener('blur', () => {
        this.texts[index].text = inputElEdit.value
        foreignElEdit.style.display = 'none'
        this.draw()
      })
    },
    addLine(cx, cy) {
      if (!this.lineStart) {
        this.lineStart = { x: cx, y: cy }
        //console.log('lineStart cx:', cx, ' cy:', cy)
      } else {
        if (!this.lineEnd) {
          this.lineEnd = { x: cx, y: cy }
          //console.log('lineEnd cx:', cx, ' cy:', cy)

          if (
            this.lineStart.x != this.lineEnd.x &&
            this.lineStart.y != this.lineEnd.y
          ) {
            const line = {
              x1: this.lineStart.x,
              x2: this.lineEnd.x,
              y1: this.lineStart.y,
              y2: this.lineEnd.y
            }

            this.lines.push(line)
            this.draw()
          }
        }
      }
    },
    drawLine() {
      this.lines.forEach(item => {
        const lineEl = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'line'
        )
        lineEl.setAttribute('x1', item.x1)
        lineEl.setAttribute('x2', item.x2)
        lineEl.setAttribute('y1', item.y1)
        lineEl.setAttribute('y2', item.y2)
        lineEl.setAttribute('stroke', '#8E44AD')
        lineEl.setAttribute('stroke-width', '4')
        lineEl.setAttribute('stroke-linecap', 'round')
        lineEl.setAttribute('stroke-opacity', '1')
        lineEl.style.cursor = 'pointer'

        this.poleEl.prepend(lineEl)

        lineEl.addEventListener('click', () => {
          if (this.removeMode) {
            this.removeLineSelf(item.x1, item.x2, item.y1, item.y2)
          }
        })
      })

      this.lineStart = null
      this.lineEnd = null
    },
    draw() {
      this.poleEl.innerHTML = ''
      this.drawPoint()
      this.drawLine()
    },
    clearPole() {
      this.poleEl.innerHTML = ''
      this.points = []
      this.texts = []
      this.lines = []
    }
  }
}
</script>