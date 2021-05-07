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
      <div class="bg-light rounded-2 shadow-sm mt-2 p-0 pt-1 ps-2 pe-2 small">
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
      poleClick: false,
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
      this.poleClick = true
      const cx = e.offsetX
      const cy = e.offsetY

      const point = { x: cx, y: cy }
      this.points.push(point)

      const textContent = this.points.length
      const text = { x: cx, y: cy, text: textContent }
      this.texts.push(text)
      this.draw()

      // point.addEventListener("dblclick", () => {
      //   console.log("dblclick");
      // });
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
        const foreign = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'foreignObject'
        )
        foreign.setAttribute('x', item.x - 16)
        foreign.setAttribute('y', item.y - 12)
        foreign.setAttribute('width', 32)
        foreign.setAttribute('height', 24)
        foreign.style.display = 'none'

        // Create inputEl
        const inputEl = document.createElementNS(
          'http://www.w3.org/1999/xhtml',
          'input'
        )
        inputEl.setAttribute('type', 'text')
        inputEl.setAttribute('name', 'pointName' + index)
        inputEl.style.width = '100%'
        inputEl.style.height = '100%'
        inputEl.style.border = '4px solid red'

        // Create Grpup
        const group = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'g'
        )
        group.style.cursor = 'pointer'

        foreign.append(inputEl)
        group.append(pointEl)
        group.append(textEl)
        group.append(foreign)
        this.poleEl.append(group)

        group.addEventListener('click', () => {
          this.addLine(item.x, item.y)
        })
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
    },
    drawLine() {
      this.lines.forEach(item => {
        const line = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'line'
        )
        line.setAttribute('x1', item.x1)
        line.setAttribute('x2', item.x2)
        line.setAttribute('y1', item.y1)
        line.setAttribute('y2', item.y2)
        line.setAttribute('stroke', '#8E44AD')
        line.setAttribute('stroke-width', '4')
        line.setAttribute('stroke-linecap', 'round')
        line.setAttribute('stroke-opacity', '1')

        this.poleEl.prepend(line)
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