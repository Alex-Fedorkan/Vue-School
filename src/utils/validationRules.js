export const isRequired = (val) => ({
  hasPassed: !!val,
  message: 'Будь-ласка заповніть це поле',
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: 'Ви перевищили ліміт',
});
