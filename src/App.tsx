import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Layouts/Login/Login';
import Rai from './Layouts/Home/Rai';

type Props = {}

const App = (props: Props) => {
  return (
    <div>
        <Routes>
            <Route path="/rai" element={<Rai />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Login />} />
        </Routes>

    </div>
  )
}

export default App