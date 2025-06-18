# 🚗 Luxury Cars Slider

Интерактивный React-слайдер с анимацией и данными о люксовых автомобилях.
Проект реализован с использованием React, динамического импорта компонентов, асинхронного получения данных и адаптивного дизайна.

---

## 🖼️ Превью

<img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/CarsSlider/1.png"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

<hr/>

<img
  src="https://raw.githubusercontent.com/skarb-by/images/refs/heads/main/help/CarsSlider/2.png"
  alt=""
  title=""
  style="display: inline-block; margin: 0 auto; ">

<hr/>

## ⚙️ Функциональность

- 📦 Динамическая подгрузка компонентов (`lazy`, `Suspense`)
- 🧠 Использование `useCallback`, `useMemo`, `memo` для оптимизации
- 🖼️ Анимации при переключении слайдов
- 🔁 Случайный порядок карточек, ограничение отображения до 4-х
- 📱 Адаптивный дизайн с `@media`

---

## 📁 Структура проекта

```bash
src/
├── api/
│   └── getSliderData.js        # Получение данных
│
├── components/
│   ├── Content/
│   │   └── Content.jsx         # Основной компонент, собирающий контент
│   ├── IconButton/
│   │   └── IconButton.jsx      # Кнопки переключения слайдов
│   ├── Slider/
│   │   └── Slider.jsx          # Слайдер с анимацией
│   ├── Text/
│   │   └── Text.jsx            # Информационный текст
│   ├── Title/
│   │   └── Title.jsx           # Заголовок "Luxury cars"
│   └── Loading/
│       └── Loading.jsx         # Компонент загрузки
│
├── App.jsx                     # Точка входа в приложение
├── index.jsx                   # Рендер приложения
└── index.css                   # Глобальные стили
```

---

## 🚀 Установка и запуск

```bash
# 1. Установите зависимости
npm install

# 2. Запустите проект в режиме разработки
npm run dev
```

---

## 🛠️ Технологии

- React
- React.lazy / Suspense
- Vite
- CSS Modules / Animation / Media Queries
- useEffect, useState, useCallback, useMemo, memo

---

## 📌 Планы на будущее

- [ ] Добавить автопрокрутку слайдов
- [ ] Подключение реального API
- [ ] Добавление категорий/фильтров автомобилей
- [ ] Тесты с использованием Jest / RTL

---

## 👨‍💻 Автор

[skarb-by](https://github.com/skarb-by)

---
