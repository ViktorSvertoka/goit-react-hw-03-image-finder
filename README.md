# Критерії приймання

- Створений репозиторій `goit-react-hw-03-image-finder`
- При здачі домашньої роботи є посилання: на вихідні файли та робочу сторінку
  проектів на `GitHub Pages`.
- У стані компонентів зберігається мінімально необхідний набір даних, решта
  обчислюється
- Під час запуску коду завдання в консолі відсутні помилки та попередження.
- Для кожного компонента є окрема папка з файлом React-компонента та файлом
  стилів
- Для компонентів описані `propTypes`
- Все, що компонент очікує у вигляді пропсів, передається йому під час виклику.
- Імена компонентів зрозумілі та описові
- JS-код чистий і зрозумілий, використовується `Prettier`.
- Стилізація виконана `CSS-модулями` або `Styled Components`.

## Завдання

# Пошук зображень

Напиши застосунок пошуку зображень за ключовим словом. Прев'ю робочого
застосунку
[дивись за посиланням](https://drive.google.com/file/d/1oXCGyiq4uKwW0zzraZLKk4lh3voBlBzZ/view?usp=sharing).

Створи компоненти `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`,
`<Loader>`, `<Button>` і `<Modal>`. Готові стилі компонентів можна взяти у файлі
[styles.css](./assets/styles.css) і підправити під себе, якщо потрібно.

![preview](./assets/preview.jpg)

## Інструкція Pixabay API

Для HTTP-запитів використовуй публічний сервіс пошуку зображень
[Pixabay](https://pixabay.com/api/docs/). Зареєструйся та отримай приватний ключ
доступу.

URL-рядок HTTP-запиту.

```bash
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

Pixabay API підтримує пагінацію, за замовчуванням параметр `page` дорівнює `1`.
Нехай у відповіді надходить по 12 об'єктів, встановлено в параметрі `per_page`.
Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати
значення `page` до `1`.

У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні
властивості.

- `id` – унікальний ідентифікатор
- `webformatURL` – посилання на маленьке зображення для списку карток
- `largeImageURL` – посилання на велике зображення для модального вікна

## Опис компонента `<Searchbar>`

Компонент приймає один проп `onSubmit` – функцію для передачі значення інпута
під час сабміту форми. Створює DOM-елемент наступної структури.

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Опис компонента `<ImageGallery>`

Список карток зображень. Створює DOM-елемент наступної структури.

```html
<ul class="gallery">
  <!-- Набір <li> із зображеннями -->
</ul>
```

## Опис компонента `<ImageGalleryItem>`

Компонент елемента списку із зображенням. Створює DOM-елемент наступної
структури.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

## Опис компонента `<Button>`

При натисканні на кнопку `Load more` повинна довантажуватись наступна порція
зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише
тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка
не рендериться.

## Опис компонента `<Loader>`

Компонент спінера відображається, доки відбувається завантаження зображень.
Використовуйте будь-який готовий компонент, наприклад
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) або
будь-який інший.

## Опис компонента `<Modal>`

Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним
оверлеєм і відображатися велика версія зображення. Модальне вікно повинно
закриватися по натисканню клавіші `ESC` або по кліку на оверлеї.

Зовнішній вигляд схожий на функціонал цього
[VanillaJS-плагіна](https://basiclightbox.electerious.com/), тільки замість
білого модального вікна рендериться зображення (у прикладі натисніть `Run`).
Анімацію робити не потрібно!

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```

---

npm i axios

import axios from 'axios'

---

npm install @emotion/react @emotion/styled

import styled from '@emotion/styled'

---

npm i nanoid

import { nanoid } from 'nanoid'

---

npm i modern-normalize

import 'modern-normalize'

---

npm install react-loader-spinner --save

import { Audio } from 'react-loader-spinner'

---

npm i react-icons

import { BsSearch } from 'react-icons/bs';

---

npm i react-toastify

import { ToastContainer, toast } from 'react-toastify';

---

API key: '34523545-f21683fd59bfc3e4e2549fe07'
