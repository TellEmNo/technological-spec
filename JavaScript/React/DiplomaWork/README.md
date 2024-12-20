# React Redux Project: Thunk vs Saga

## Описание проекта
Этот проект демонстрирует работу с двумя популярными средствами для обработки асинхронных операций в React: **Redux Thunk** и **Redux Saga**. В проекте реализована функциональность для работы с постами: добавление, удаление, редактирование. Сравниваются два способа работы с асинхронными запросами для получения и обновления данных.

## Основной функционал
1. **Добавление поста** – позволяет пользователю добавить новый пост в список.
2. **Удаление поста** – позволяет удалить пост из списка.
3. **Редактирование поста** – позволяет редактировать выбранный пост через форму в модальном окне.
4. **Асинхронные запросы** – использованы два способа обработки асинхронных запросов:
   - **Redux Thunk** для получения постов с API.
   - **Redux Saga** для обновления поста через PUT-запрос.

## Стек технологий
- **React** - для создания компонентов пользовательского интерфейса.
- **Redux** - для управления состоянием приложения.
- **Redux Thunk** - для обработки асинхронных действий.
- **Redux Saga** - для работы с побочными эффектами и асинхронными операциями.
- **Material UI** - для оформления компонентов.

## Установка и запуск
1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/TellEmNo/technological-spec/tree/main/JavaScript/React/DiplomaWork
2. Перейти в каталог проекта
3. Установить зависимости
4. Запустить проект
5. Откроется браузер с доступом к приложению на http://localhost:3000.

## Как работает проект
1. Redux Thunk:
  - Для асинхронных операций, таких как загрузка данных, используется thunk. Он выполняет запросы к API и диспатчит результаты в стор.
2. Redux Saga:
  - Для обновления данных (редактирование поста) используется Redux Saga. Saga отслеживает действия и выполняет асинхронные запросы с помощью генераторов.

## Структура проекта
- src/components/ - компоненты приложения
  - PostList.jsx - компонент для отображения списка постов.
  - PostForm.jsx - форма для создания поста.
  - EditPostForm.jsx - форма для редактирования поста в модальном окне.
  - Loader.jsx - компонент загрузки
- src/redux/ - Redux состояния и действия.
  - actions/ - действия для работы с постами и их обновлением.
  - reducers/ - редьюсеры для обработки действий.
  - sagas/ - саги для обработки асинхронных операций.
- src/App.js - главный компонент приложения.

## Заметки
  - При запуске приложения будет показан список постов с возможностью их добавления, удаления и редактирования.
  - Для сравнения функционала использовались два метода: Thunk и Saga. В коде есть комментарии, поясняющие, какой метод используется в каждом случае.