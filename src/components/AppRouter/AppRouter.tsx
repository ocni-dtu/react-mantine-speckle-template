import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { Loading } from '@components'
import { AuthPage } from '@pages'

const LoginPage = lazy(() => import('../../pages/LoginPage'))
const ProjectsPage = lazy(() => import('../../pages/ProjectsPage'))

export const AppRouter = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='*' element={<LoginPage />} />
    </Routes>
  </Suspense>
)
