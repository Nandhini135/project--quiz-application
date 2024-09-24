import React from 'react';
import '../style/App.css';
import Main from './Main.js';
import Quiz from './Quiz.js';
import Result from './Result.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CheckUserExist } from '../helper/helper.js';

/**react routes */



function App() {
    return (
        <div className='App'>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<Main />} />

                    <Route path='/quiz' element={<CheckUserExist><Quiz /></CheckUserExist>} />

                    <Route path='/result' element={<CheckUserExist><Result /></CheckUserExist>} />

                </Routes>


            </BrowserRouter>
        </div>
    )
}







export default App;


