  export const buttonDefault = [{ name: 'Button' }];
  export const buttonElevation = [
    {attributes: {elevation: '4', size: 'large'}, name: 'Elevation 4'},
    {attributes: {elevation: '8', size: 'large'}, name: 'Elevation 8'},
    {attributes: {elevation: '12', size: 'large'}, name: 'Elevation 12'},
    {attributes: {elevation: '16', size: 'large'}, name: 'Elevation 16'},
    {attributes: {elevation: '20', size: 'large'}, name: 'Elevation 20'},
    {attributes: {elevation: '24', size: 'large'}, name: 'Elevation 24'},
  ];
  export const buttonSizes = [
    {attributes: {size: 'x-small'}, name: 'Extra small Button'},
    {attributes: {size: 'small'}, name: 'Small Button'},
    {name: 'Regular Button'},
    {attributes: {size: 'large'}, name: 'Large Button'},
    {attributes: {size: 'x-large'}, name: 'X-large Button'},
  ];
  export const buttonRoundness = [
    {attributes: {rounded: '0', size: 'large'}, name: 'Rounded 0'},
    {attributes: {rounded: 'xs', size: 'large'}, name: 'Rounded xs'},
    {attributes: {rounded: 'sm', size: 'large'}, name: 'Rounded sm'},
    {attributes: {rounded: 'lg', size: 'large'}, name: 'Rounded lg'},
    {attributes: {rounded: 'xl', size: 'large'}, name: 'Rounded xl'},
  ];
  export const buttonColor = [
    {attributes: {color: '#00a0e3', size: 'large'}, name: 'Button'},
    {attributes: {color: '#89cb4e', textColor: 'white', size: 'large'}, name: 'Button'},
    {attributes: {color: '#fca5a5',textColor: 'black', size: 'large'}, name: 'Button'},
    {attributes: {color: '#facc15', size: 'large'}, name: 'Button'},
    {attributes: {color: '#4f46e5', size: 'large'}, name: 'Button'},
  ];
  export const buttonIcons = [
    {attributes: {buttonIcon: 'mdi-plus', rounded: 'xl', icon: true}},
    {attributes: {buttonIcon: 'mdi-cog', rounded: 'lg', icon: true}},
    {attributes: {buttonIcon: 'mdi-delete-outline', rounded: 'xl', icon: true}},
    {attributes: {buttonIcon: 'mdi-thumb-up', rounded: 'lg', icon: true}},
    {attributes: {buttonIcon: 'mdi-heart', rounded: 'xl', icon: true}},
  ];
  export const buttonIconsText = [
    {attributes: {buttonIcon: 'mdi-heart', rounded: 'lg', size: 'x-large'}, name: 'Button'}
  ];
  export const buttonVariant = [
    {attributes: {variant: 'elevated', size: 'large'}, name: 'Elevated'},
    {attributes: {variant: 'flat', size: 'large'}, name: 'Flat'},
    {attributes: {variant: 'tonal', size: 'large'}, name: 'Tonal'},
    {attributes: {variant: 'outlined', size: 'large'}, name: 'Outlined'},
    {attributes: {variant: 'text', size: 'large'}, name: 'Text'},
    {attributes: {variant: 'plain', size: 'large'}, name: 'Plain'}
  ];
  export const buttonHover = [
    {attributes: {variant: 'outlined', size: 'large', enableHover: 'true'}, name: 'Enable Hover'},
  ];
  export const variantInfo = [
    {title: 'elevated', text: 'приподнимает кнопку с тенью'},
    {title: 'flat', text: 'убирает тень кнопки'},
    {title: 'tonal', text: 'цвет фона с пониженной прозрачностью'},
    {title: 'outlined', text: 'применяет тонкую рамку использую текущий цвет фона'},
    {title: 'text', text: 'удаляет фон и убирает тень'},
    {title: 'plain', text: 'удаляет фон и снижает прозрачность до наведения'},
  ];