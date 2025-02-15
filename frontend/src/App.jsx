// import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
// import { useEffect, useState } from 'react'
//import Toggle from './components/Toggle'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {

  // const [darkMode, setDarkMode] = useState(false)

  // const toggleDarkMode = () => {
  //  setDarkMode(!darkMode)
  // }



  // useEffect = (() => {
  //   //if user has selected a theme, use that
  //   const selectedTheme = localStorage.getItem('theme')

  //   if(selectedTheme){
  //     document.body.classList.add(selectedTheme)
  //   }else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  //     document.body.classList.add('dark')
  //   }else{
  //     document.body.classList.add('light')
  //   }
  // }, [])

  return (
    <>
      {/*         <Routes>
        <Route 
          path='/admin/*' 
          element={
            <ProtectedRoute>
              <AdminRoutes />
            </ProtectedRoute> 
        }/>

        <Route 
          path='/*' 
          element={
            <Navigate to="/" /> 
        }/>
      </Routes>
    </>
)}

const AdminRoutes = () => {
  return(
    <>
      <Routes>
        <Route path='/' element={<Admin />} />
      </Routes>*/}
      {/*<div className={`${darkMode && 'dark'}`}>
      <h1>Hello</h1>
      {darkMode ? 'light' : 'dark'}
    </div>
*/}

      <div className='h-screen dark:bg-neutral-900 dark:text-white'>
        {/* <Toggle /> */}
        <Hero />
        <About />
      </div>

    </>
  )
}

export default App
