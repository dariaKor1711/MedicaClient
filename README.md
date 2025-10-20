# Medica Client

Веб-приложение для медицинской клиники Medica. Frontend часть проекта, включающая лендинг-страницу и будущий личный кабинет пациентов.

## 🚀 Технологии

- **React 19** - UI библиотека
- **TypeScript** - Типизация
- **Vite** - Сборщик и dev-сервер
- **Tailwind CSS** - Utility-first CSS фреймворк
- **React Router** - Маршрутизация
- **React Query** - Управление серверным состоянием
- **Axios** - HTTP клиент
- **Zustand** - Управление клиентским состоянием
- **Vitest** - Тестирование

## 📁 Структура проекта

```
src/
├── components/
│   └── landing/         # Компоненты лендинг-страницы
├── pages/               # Страницы приложения
├── routes/              # Конфигурация маршрутов
├── lib/                 # Библиотеки и утилиты (axios, queryClient)
├── services/            # API сервисы (будущие)
├── types/               # TypeScript типы
└── styles/              # Глобальные стили
```

## 🎨 Дизайн

Дизайн разработан в Figma и реализован с использованием Tailwind CSS.

### Цвета
- Primary: `#2461FF` (синий)
- Black: `#000000`
- White: `#FFFFFF`
- Gray: `#D0F4FD`, `#E9E9EB`, `#F5F5F7`

### Шрифты
- Poppins (Regular 400, Medium 500, SemiBold 600)
- Inter (SemiBold 600)

## 🛠️ Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Превью production-сборки
npm run preview

# Запуск тестов
npm run test

# Запуск тестов с UI
npm run test:ui

# Проверка типов
npm run type-check

# Линтинг
npm run lint

# Форматирование кода
npm run format
```

## 📖 Документация

- [LANDING.md](./LANDING.md) - Описание компонентов лендинга
- [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md) - Руководство по интеграции с backend
- [public/images/README.md](./public/images/README.md) - Список необходимых изображений

## 🔗 Backend

Backend API должен быть развернут отдельно. См. [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md) для деталей.

### Переменные окружения

Создайте файл `.env` в корне проекта:

```env
VITE_API_URL=http://localhost:3000/api
```

## 🎯 Текущий статус

### ✅ Реализовано

- [x] Базовая настройка проекта (Vite, TypeScript, Tailwind)
- [x] Конфигурация линтера и форматтера
- [x] Компоненты лендинг-страницы
- [x] Маршрутизация
- [x] Настройка axios и React Query
- [x] Адаптивная верстка (desktop)

### 🔄 В процессе

- [ ] Добавление реальных изображений
- [ ] Интеграция с backend API
- [ ] Мобильная адаптация

### 📝 Планируется

- [ ] Формы записи на прием
- [ ] Личный кабинет пациента
- [ ] Админ-панель
- [ ] Валидация форм
- [ ] Обработка ошибок
- [ ] Анимации
- [ ] SEO оптимизация
- [ ] Тесты

## 🤝 Разработка

### Добавление новых компонентов

```typescript
// src/components/MyComponent.tsx
export default function MyComponent() {
  return <div>My Component</div>
}
```

### Работа с API

```typescript
// src/services/myService.ts
import axios from '@/lib/axios'

export const myService = {
  getData: async () => {
    const response = await axios.get('/endpoint')
    return response.data
  },
}
```

### Использование в компоненте

```typescript
import { useQuery } from '@tanstack/react-query'
import { myService } from '@/services/myService'

export default function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['myData'],
    queryFn: myService.getData,
  })

  if (isLoading) return <div>Loading...</div>

  return <div>{data}</div>
}
```

## 📝 Code Style

Проект использует ESLint и Prettier для поддержания единого стиля кода.

```bash
# Проверка кода
npm run lint

# Автоматическое исправление
npm run lint -- --fix

# Форматирование
npm run format
```

## 🧪 Тестирование

```bash
# Запуск всех тестов
npm run test

# Запуск с UI
npm run test:ui

# Coverage
npm run test:coverage
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
