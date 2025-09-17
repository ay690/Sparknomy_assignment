import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AssignmentScreen from './screens/AssignmentScreen/AssignmentScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AssignmentScreen title='Hey there' />
  </StrictMode>,
)
