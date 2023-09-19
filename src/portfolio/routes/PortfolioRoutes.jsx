import { Navigate, Route, Routes } from 'react-router-dom'
import { PortfolioInitialpage } from '../pages/PortfolioInitialpage';


export const PortfolioRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<PortfolioInitialpage />} />
          
          <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}
