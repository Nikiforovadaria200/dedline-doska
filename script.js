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
