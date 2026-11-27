// Массив задач-заглушек для отрисовки
const ITEMS = [
  { id: "t1", title: "Черновик стенгазеты", due: "2026-03-12", status: "todo" },
  { id: "t2", title: "Решить задачи по физике", due: "2026-03-15", status: "in-progress" },
  { id: "t3", title: "Прочитать главу из учебника", due: "2026-03-10", status: "done" }
];

// Находим список на странице, куда будем вставлять карточки
const list = document.querySelector("#list");

// Функция отрисовки задач в список
function renderItems(items) {
  // Если задач нет, показываем заглушку
  if (items.length === 0) {
    list.innerHTML = '<li class="empty">В этой колонке пока пусто.</li>';
    return;
  }
  
  // Создаём HTML-код для каждой задачи и склеиваем в одну строку
  list.innerHTML = items.map(item => {
    // Определяем текст статуса для отображения
    let statusText = "";
    if (item.status === "todo") statusText = "Очередь";
    if (item.status === "in-progress") statusText = "В работе";
    if (item.status === "done") statusText = "Готово";
    
    // Возвращаем HTML-разметку карточки
    return `
      <li class="card" data-id="${item.id}">
        <h3>${item.title}</h3>
        <p>Срок: ${item.due}</p>
        <p>Статус: ${statusText}</p>
      </li>
    `;
  }).join("");
}

// Вызываем функцию отрисовки с нашим массивом задач
renderItems(ITEMS);

/* Перерисовка списка целиком: источник истины — массив tasks */
function renderBoard() {
  /* Контейнер списка берём из разметки при каждом вызове */
  const container = document.querySelector("#list");

  /* Пустой массив: приглашаем добавить первую запись и выходим */
  if (tasks.length === 0) {
    container.innerHTML = '<li class="empty">Задач пока нет — добавьте первую через форму «Новая задача».</li>';
    return;
  }

  /* Одна сборка HTML: map делает разметку по каждой записи, join склеивает без запятых */
  container.innerHTML = tasks.map((task) => {
    /* Русская метка вместо технического значения статуса */
    let label = "Очередь";
    if (task.status === "in-progress") label = "В работе";
    if (task.status === "done") label = "Готово";

    /* Срок могли не выбрать — показываем понятный текст вместо пустоты */
    let dueText = "Срок не указан";
    if (task.due !== "") dueText = `Срок: ${task.due}`;

    /* Карточка: класс card и data-id, чтобы позже находить запись по клику */
    return `<li class="card" data-id="${task.id}">
      <h3>${task.title}</h3>
      <p>${dueText}</p>
      <p>Статус: ${label}</p>
    </li>`;
  }).join("");
}
