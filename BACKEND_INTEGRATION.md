# Интеграция с Backend

## Структура проекта для full-stack приложения

Рекомендуемая структура проекта с учетом backend:

```
medica/
├── MedicaClient/          # Frontend (текущий репозиторий)
│   ├── src/
│   ├── public/
│   └── package.json
│
└── MedicaServer/          # Backend (создать отдельно)
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   └── app.ts
    ├── package.json
    └── .env
```

## Backend API спецификация

### Базовый URL
```
http://localhost:3000/api
```

### Эндпоинты

#### 1. Медицинские направления

**GET /api/practices**
```json
{
  "practices": [
    {
      "id": 1,
      "title": "Cardiology",
      "description": "Lorem ipsum dolor sit amet...",
      "icon": "heart"
    }
  ]
}
```

#### 2. Врачи

**GET /api/doctors**
```json
{
  "doctors": [
    {
      "id": 1,
      "name": "Dr. Audrey Smith",
      "specialization": "Cardiology",
      "description": "Lorem ipsum dolor sit amet...",
      "image": "/images/doctors/doctor-1.jpg",
      "experience": 15
    }
  ]
}
```

**GET /api/doctors/:id**
```json
{
  "id": 1,
  "name": "Dr. Audrey Smith",
  "specialization": "Cardiology",
  "description": "Lorem ipsum dolor sit amet...",
  "image": "/images/doctors/doctor-1.jpg",
  "experience": 15,
  "education": [...],
  "schedule": [...]
}
```

#### 3. Новости

**GET /api/news**
```json
{
  "news": [
    {
      "id": 1,
      "title": "Lorem ipsum dolor sit amet...",
      "date": "2022-11-23",
      "image": "/images/news/news-1.jpg",
      "excerpt": "Lorem ipsum...",
      "content": "Full content..."
    }
  ]
}
```

#### 4. Запись на прием

**POST /api/appointments**

Request:
```json
{
  "doctorId": 1,
  "patientName": "John Doe",
  "patientPhone": "+0 123-456-789",
  "patientEmail": "john@example.com",
  "date": "2024-01-15",
  "time": "14:00",
  "type": "in-person" | "virtual",
  "reason": "Regular checkup"
}
```

Response:
```json
{
  "id": 1,
  "status": "pending",
  "confirmationCode": "ABC123",
  "message": "Appointment successfully created"
}
```

#### 5. Заболевания

**GET /api/diseases?letter=A**
```json
{
  "diseases": [
    {
      "id": 1,
      "name": "Arthritis",
      "description": "...",
      "symptoms": [...]
    }
  ]
}
```

**GET /api/diseases/search?q=pain**
```json
{
  "diseases": [...]
}
```

#### 6. Симптомы

**GET /api/symptoms**
```json
{
  "symptoms": [
    {
      "id": 1,
      "name": "Abdominal pain",
      "category": "digestive"
    }
  ]
}
```

## Настройка axios в Frontend

Файл `/src/lib/axios.ts` уже настроен. Обновите `VITE_API_URL` в `.env`:

```env
VITE_API_URL=http://localhost:3000/api
```

## Пример использования API в компонентах

### Создание сервиса

```typescript
// src/services/appointments.service.ts
import axios from '@/lib/axios'

export interface AppointmentData {
  doctorId: number
  patientName: string
  patientPhone: string
  patientEmail: string
  date: string
  time: string
  type: 'in-person' | 'virtual'
  reason: string
}

export const appointmentsService = {
  create: async (data: AppointmentData) => {
    const response = await axios.post('/appointments', data)
    return response.data
  },
}
```

### Использование в компоненте с React Query

```typescript
// src/components/landing/AppointmentForm.tsx
import { useMutation } from '@tanstack/react-query'
import { appointmentsService } from '@/services/appointments.service'

export default function AppointmentForm() {
  const mutation = useMutation({
    mutationFn: appointmentsService.create,
    onSuccess: (data) => {
      alert(`Appointment created: ${data.confirmationCode}`)
    },
    onError: (error) => {
      alert('Error creating appointment')
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({
      doctorId: 1,
      patientName: 'John Doe',
      // ... other fields
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Submitting...' : 'Book Appointment'}
      </button>
    </form>
  )
}
```

## Рекомендации по Backend стеку

### Node.js + Express + TypeScript

```typescript
// backend/src/app.ts
import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server
}))
app.use(express.json())
app.use('/api', routes)

export default app
```

### База данных

Рекомендуемые варианты:
- **PostgreSQL** - для реляционных данных
- **MongoDB** - для гибкой схемы
- **Prisma** - как ORM

### Аутентификация

Рекомендуется использовать:
- JWT токены
- Refresh tokens
- HTTP-only cookies

## CORS настройки

В production обновите CORS настройки backend:

```typescript
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}))
```

## Переменные окружения

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000/api
```

### Backend (.env)
```env
PORT=3000
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
CLIENT_URL=http://localhost:5173
```

## Деплой

### Frontend
- Vercel
- Netlify
- GitHub Pages

### Backend
- Railway
- Render
- Heroku
- DigitalOcean

## Безопасность

1. Валидация всех входных данных
2. Санитизация пользовательского ввода
3. Rate limiting для API
4. HTTPS в production
5. Защита от SQL injection
6. Защита от XSS
7. CSRF токены для форм

## Мониторинг

Рекомендуемые инструменты:
- Sentry - для отслеживания ошибок
- LogRocket - для записи сессий
- Google Analytics - для аналитики

