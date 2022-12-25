import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {MainTemplate} from 'shared/ui/templates/MainTemplate'
import {NotFoundPage} from 'pages/NotFoundPage/NotFoundPage'
import {RequireAuth} from 'shared/routes/RequireAuth'
import {routes} from 'shared/routes'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({path, element, requireAuth}) => (
            <Route
              key={path}
              path={path}
              element={
                <RequireAuth requireAuth={!!requireAuth}>
                  <MainTemplate>{element}</MainTemplate>
                </RequireAuth>
              }
            />
          ))}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
