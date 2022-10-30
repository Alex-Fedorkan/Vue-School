export const isRequired = (val) => ({
  hasPassed: !!val,
  message: 'Будь-ласка заповніть це поле',
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: 'Ви перевищили ліміт',
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: 'Невірний email',
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d]).{7,256}$/.test(val),
  message: 'Пароль повинен мати одну цифру і один символ',
});
