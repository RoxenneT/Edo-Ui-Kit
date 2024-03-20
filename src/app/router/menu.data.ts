interface IMenuItem {
 name: string
 url: string
 icon?: string
}

export const MENU: IMenuItem[] = [
 {
  name: 'Главная',
  url: '/cabinet',
 },
 {
  name: 'Как пользоваться',
  url: '/instruction',
 },
 {
  name: 'Payments',
  icon: 'ph:contactless-payment',
  url: '/instruction',
 },
 {
  name: 'Orders',
  icon: 'fluent:receipt-28-regular',
  url: '/orders',
 },
 {
  name: 'Customers',
  icon: 'mingcute:group-line',
  url: '/customers',
 },
 {
  name: 'Feedback',
  icon: 'fluent:person-feedback-48-regular',
  url: '/feedback',
 },
 {
  name: 'Settings',
  icon: 'radix-icons:gear',
  url: '/settings',
 },
 {
  name: 'Help center',
  icon: 'radix-icons:question-mark',
  url: '/help',
 },
]