import React from 'react'
import { Outlet } from 'react-router-dom';

import './styles.css'
const defaultLayout = () => {
  return (
    <section className='layout'>
    <Outlet/>
    </section>
  )
}

export default defaultLayout
