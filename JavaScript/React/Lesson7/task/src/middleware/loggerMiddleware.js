const loggerMiddleware = store => next => action => {
  // Логируем состояние до выполнения действия
  console.log('Текущее состояние:', store.getState());
  console.log('Отправленное действие:', action);

  next(action);

  // Логируем состояние после выполнения действия
  console.log('Состояние после действия:', store.getState());
};

export default loggerMiddleware;
