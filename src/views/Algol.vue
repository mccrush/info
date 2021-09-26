<template>
  <div class="row">
    <div class="col-12 pt-3">
      <h4>Алгоритмы</h4>
      <p>
        <strong>Алгоритм</strong> — конечная совокупность точно заданных правил
        решения некоторого класса задач или набор инструкций, описывающих
        порядок действий исполнителя для решения определённой задачи
      </p>
      <h5>Свойства алгоритмов<small>*</small></h5>
      <p>
        <strong>Детерминированность</strong> (определенность) — предполагает
        получение однозначного результата вычислительного процecca при заданных
        исходных данных. Благодаря этому свойству процесс выполнения алгоритма
        носит механический характер
      </p>
      <p>
        <strong>Дискретность</strong> — поцесс решения задачи должен быть разбит
        на последовательность отдельных шагов-команд, которые выполняются одна
        за другой. Только после завершения одной команды начинается выполнение
        следующей
      </p>
      <p>
        <strong>Конечность</strong> — каждое из действий и весь алгоритм в целом
        обязательно завершаются
      </p>
      <p>
        <strong>Массовость</strong> — это свойство предполагает, что алгоритм
        должен быть пригоден для решения всех задач данного типа
      </p>
      <p>
        <strong>Результативность</strong> — согласно этому свойству, любой
        алгоритм должен завершаться конкретным результатом
      </p>
      <p>
        <small class="text-muted"
          >* Данный перечень свойств не является исчерпывающим</small
        >
      </p>

      <h5>Обозначение блок-схем</h5>
      <p>
        <strong>Схема</strong> — это абстракция какого-либо процесса или
        системы, наглядно отображающая наиболее значимые части
      </p>
      <p>
        На территории Российской Федерации действует единая система программной
        документации (ЕСПД), частью которой является Государственный стандарт —
        ГОСТ 19.701-90 «Схемы алгоритмов программ, данных и систем»
      </p>
      <p>
        <strong>Блок-схема</strong> — представляет собой совокупность символов,
        соответствующих этапам работы алгоритма и соединяющих их линий.
        Пунктирная линия используется для соединения символа с комментарием.
        Сплошная линия отражает зависимости по управлению между символами и
        может снабжаться стрелкой. Стрелку можно не указывать при направлении
        дуги слева направо и сверху вниз. Согласно п. 4.2.4, линии должны
        подходить к символу слева, либо сверху, а исходить снизу, либо справа
      </p>
      <div class="row mt-3 ps-2 pe-2">
        <div
          class="
            col-12 col-sm-5 col-md-4
            border border-bottom-0
            text-center
            small
            lh-1
            pt-2
            pb-2
          "
        >
          <img
            src="@/assets/algol/terminator.svg"
            alt="Терминатор начала и конца работы функции"
            width="144"
            class="mb-2"
          /><br />
          <small>Терминатор начала и конца работы функции</small>
        </div>
        <div
          class="
            col-12 col-sm-7 col-md-8
            border border-bottom-0
            small
            lh-sm
            pt-2
            pb-2
          "
        >
          Терминатором начинается и заканчивается любой алгоритм
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="
            col-12 col-sm-5 col-md-4
            border border-bottom-0
            bg-light
            text-center
            small
            lh-1
            pt-2
            pb-2
          "
        >
          <img
            src="@/assets/algol/data.svg"
            alt="Операции ввода и вывода данных"
            width="144"
            class="mb-2"
          /><br />
          <small>Операции ввода и вывода данных</small>
        </div>
        <div
          class="
            col-12 col-sm-7 col-md-8
            border border-bottom-0
            bg-light
            small
            lh-sm
            pt-2 pt-2
            pb-2
          "
        >
          В ГОСТ определено множество символов ввода/вывода, например вывод на
          магнитные ленты, дисплеи и т.п. Если источник данных не принципиален,
          обычно используется символ параллелограмма
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="
            col-12 col-sm-5 col-md-4
            border border-bottom-0
            text-center
            small
            lh-1
            pt-2
            pb-2
          "
        >
          <img
            src="@/assets/algol/process.svg"
            alt="Выполнение операций над данными"
            width="144"
            class="mb-2"
          /><br />
          <small>Выполнение операций над данными</small>
        </div>
        <div
          class="
            col-12 col-sm-7 col-md-8
            border border-bottom-0
            small
            lh-sm
            pt-2
            pb-2
          "
        >
          В блоке операций обычно размещают одно или несколько операций
          присваивания, не требующих вызова внешних функций
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="
            col-12 col-sm-5 col-md-4
            border border-bottom-0
            bg-light
            text-center
            small
            lh-1
            pt-2
            pb-2
          "
        >
          <img
            src="@/assets/algol/solution.svg"
            alt="Блок, иллюстрирующий ветвление алгоритма"
            width="144"
            class="mb-2"
          /><br />
          <small>Блок, иллюстрирующий ветвление алгоритма</small>
        </div>
        <div
          class="
            col-12 col-sm-7 col-md-8
            border border-bottom-0
            bg-light
            small
            lh-sm
            pt-2
            pb-2
          "
        >
          Блок в виде ромба имеет один вход и несколько подписанных выходов. В
          случае, если блок имеет 2 выхода (соответствует оператору ветвления),
          на них подписывается результат сравнения — «да/нет». Если из блока
          выходит большее число линий (оператор выбора), внутри него
          записывается имя переменной, а на выходящих дугах — значения этой
          переменной
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="
            col-12 col-sm-5 col-md-4
            border border-bottom-0
            text-center
            small
            lh-1
            pt-2
            pb-2
          "
        >
          <img
            src="@/assets/algol/procedure.svg"
            alt="Вызов внешней процедуры"
            width="144"
            class="mb-2"
          /><br />
          <small>Вызов внешней процедуры</small>
        </div>
        <div
          class="
            col-12 col-sm-7 col-md-8
            border border-bottom-0
            small
            lh-sm
            pt-2
            pb-2
          "
        >
          Вызов внешних процедур и функций помещается в прямоугольник с
          дополнительными вертикальными линиями
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="
            col-12 col-sm-5 col-md-4
            border border-bottom-0
            bg-light
            text-center
            small
            lh-1
            pt-2
            pb-2
          "
        >
          <img
            src="@/assets/algol/loop.svg"
            alt="Начало и конец цикла"
            width="144"
            class="mb-2"
          /><br />
          <small>Начало и конец цикла</small>
        </div>
        <div
          class="
            col-12 col-sm-7 col-md-8
            border border-bottom-0
            small
            bg-light
            lh-sm
            pt-2
            pb-2
          "
        >
          Символы начала и конца цикла содержат имя и условие. Условие может
          отсутствовать в одном из символов пары. Расположение условия,
          определяет тип оператора, соответствующего символам на языке высокого
          уровня — оператор с предусловием (while) или постусловием (do … while)
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="
            col-12 col-sm-5 col-md-4
            border border-bottom-0
            text-center
            small
            lh-1
            pt-2
            pb-2
          "
        >
          <img
            src="@/assets/algol/preprocess.svg"
            alt="Подготовка данных"
            width="144"
            class="mb-1"
          /><br />
          <small>Подготовка данных</small>
        </div>
        <div
          class="
            col-12 col-sm-7 col-md-8
            border border-bottom-0
            small
            lh-sm
            pt-2
            pb-2
          "
        >
          Символ «подготовка данных» в произвольной форме, задает входные
          значения. Используется обычно для задания циклов со счетчиком
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="
            col-12 col-sm-5 col-md-4
            border border-bottom-0
            bg-light
            text-center
            small
            lh-1
            pt-2
            pb-2
          "
        >
          <img
            src="@/assets/algol/connector.svg"
            alt="Соединитель"
            width="36"
            class="mb-2"
          /><br />
          <small>Соединитель</small>
        </div>
        <div
          class="
            col-12 col-sm-7 col-md-8
            border border-bottom-0
            bg-light
            small
            lh-sm
            pt-2
            pb-2
          "
        >
          В случае, если блок-схема не умещается на лист, используется символ
          соединителя, отражающий переход потока управления между листами
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="
            col-12 col-sm-5 col-md-4
            border
            text-center
            small
            lh-1
            pt-2
            pb-2
          "
        >
          <img
            src="@/assets/algol/comment.svg"
            alt="Комментарий"
            width="144"
            class="mb-2"
          /><br />
          <small>Комментарий</small>
        </div>
        <div class="col-12 col-sm-7 col-md-8 border small lh-sm pt-2 pb-2">
          Комментарий может быть соединен как с одним блоком, так и группой.
          Группа блоков выделяется на схеме пунктирной линией
        </div>
      </div>
    </div>
  </div>
</template>