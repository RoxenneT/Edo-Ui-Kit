export const menuProps = [
    {title: ':items', text: 'массив объектов с ключами title и value'},
    {title: 'buttonColor', text: 'любой нужный вам цвет'},
    {title: 'buttonSize', text: 'x-small, small, large, x-large'},
    {title: 'buttonIcon', text: 'название иконки в формате "@mdi/font"'},
    {title: 'buttonVariant', text: 'elevated, flat, tonal, outlined, text, plain'},
];

export const menu = [
  {
    attributes: { 
      buttonColor: 'edo-white', 
      buttonVariant: 'elevated',
      buttonSize: 'large',
      items: 'languages' 
    }, 
    arrayData: [
      { title: 'Русский', value: 'ru' },
      { title: 'Қазақша', value: 'kz' }
    ],
    name: 'рус'
  },
];

export const menuWithIcon = [
  {
    attributes: { 
      buttonColor: 'success', 
      buttonIcon: 'mdi-cog',
      buttonVariant: 'outlined',
      buttonSize: 'large',
      items: 'settings' 
    }, 
    arrayData: [
      { title: 'Информация', value: 'info' },
      { title: 'Настройки', value: 'setting' }
    ],
    name: 'Подключен'
  },
];
