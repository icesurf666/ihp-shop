import React from 'react'
import Layout from 'components/Layout'
import { AppProvider } from 'context/appContext'

const App = () => (
  <AppProvider>
    <Layout />
  </AppProvider>
)

export default App
