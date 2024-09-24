import React from 'react';
import {useRef} from 'react';
import { Link } from 'react-router-dom';
import '../style/Main.css';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';

const Main=()=>{

        const inputRef=useRef(null)
        const dispatch = useDispatch()

        function startQuiz(){
            if(inputRef.current?.value){
                dispatch(setUserId(inputRef.current?.value))
            }
        }

    return(
        <div className='container'>
            <h1 className='title'>Quiz Application</h1>
            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points are awarded for the correct answer.</li>
                <li>Each questions has three options, you can choose only one.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end.</li>

            </ol>
            <form id='form'>
                <input ref={inputRef} type='text' placeholder='Username' id='input'></input>
            </form>
            <div className='start'>
                <Link className='btn btn-warning' to={'/quiz'} onClick={startQuiz}>Start Quiz</Link>
                    
            </div>
            
        </div>

    );


}





export default Main;