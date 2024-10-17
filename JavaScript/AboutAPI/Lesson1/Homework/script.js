// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.

const classesData = [
  {
    name: 'Математика',
    time: '09:00 - 10:30',
    maxParticipants: 30,
    currentParticipants: 0
  },
  {
    name: 'Физика',
    time: '11:00 - 12:30',
    maxParticipants: 25,
    currentParticipants: 0
  },
  {
    name: 'Химия',
    time: '13:00 - 14:30',
    maxParticipants: 20,
    currentParticipants: 0
  }
];

const classesContainer = document.getElementById('classes-container');

const renderClasses = () => {
  classesContainer.innerHTML = '';

  classesData.forEach((classData, index) => {
    const classCard = document.createElement('div');
    classCard.classList.add('card', 'mb-3');

    classCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${classData.name}</h5>
        <p class="card-text">Время: ${classData.time}</p>
        <p class="card-text">Максимальное количество участников: ${classData.maxParticipants}</p>
        <p class="card-text">Текущие участники: ${classData.currentParticipants}</p>
        <button class="btn btn-success register-button" data-index="${index}" ${classData.currentParticipants >= classData.maxParticipants ? 'disabled' : ''}>
          Записаться
        </button>
        <button class="btn btn-danger cancel-button" data-index="${index}" ${classData.currentParticipants === 0 ? 'disabled' : ''}>
          Отменить запись
        </button>
      </div>
    `;

    classesContainer.appendChild(classCard);
  });

  addListeners();
};

const addListeners = () => {
  document.querySelectorAll('.register-button').forEach(button => {
    button.addEventListener('click', registerForClass);
  });

  document.querySelectorAll('.cancel-button').forEach(button => {
    button.addEventListener('click', cancelRegistration);
  });
};

const registerForClass = (e) => {
  const index = e.target.dataset.index;
  if (classesData[index].currentParticipants < classesData[index].maxParticipants) {
    classesData[index].currentParticipants++;
    renderClasses();
  }
};

const cancelRegistration = (e) => {
  const index = e.target.dataset.index;
  if (classesData[index].currentParticipants > 0) {
    classesData[index].currentParticipants--;
    renderClasses();
  }
};

renderClasses();
