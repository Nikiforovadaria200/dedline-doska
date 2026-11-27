const form = document.querySelector(".task-form");
const titleInput = document.querySelector("#task-title");
const dateInput = document.querySelector("#task-date");
const errorEl = document.querySelector("#title-error");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Отменяем стандартную перезагрузку страницы

  const title = titleInput.value.trim(); // Читаем название и убираем лишние пробелы
  const due = dateInput.value; // Читаем выбранный срок из поля

  if (title === "") { // Проверяем, не пустая ли строка после обрезки
    errorEl.textContent = "Введите название задачи"; // Пишем подсказку, что нужно сделать
    return; // Прерываем выполнение функции, дальше код не пойдёт
  }

  errorEl.textContent = ""; // Очищаем текст ошибки при успешной проверке

  const newTask = { // Создаём объект новой задачи по требуемой структуре
    id: "t" + Date.now(), // Генерируем уникальный строковый идентификатор
    title: title, // Сохраняем проверенное название
    due: due, // Сохраняем срок (будет пустая строка, если дату не выбрали)
    status: "todo" // Новая задача всегда попадает в первую колонку
  };

  tasks.push(newTask); // Добавляем новую запись в конец массива tasks
  renderBoard(); // Перерисовываем всю доску на основе обновлённого массива

  form.reset(); // Очищаем все поля формы от введённых данных
  titleInput.focus(); // Возвращаем фокус в поле названия для быстрого ввода следующей
});
