import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-muted-foreground mt-2">Страница не найдена</p>
        <Link to="/" className="inline-block mt-4 text-blue-600 hover:underline">На главную</Link>
      </div>
    </main>
  )
}


