import React, {useState } from 'react';
import Questions from './Questions';
import '../style/Quiz.css'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';

/**redux store import */
import { useSelector, useDispatch } from 'react-redux';

const Quiz = () => {

    const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result)
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()
 

    function onNext() {

        if (trace < queue.length) {
            dispatch(MoveNextQuestion());                    /**update the trace value by one using MoveNextAction */ 

            /**insert a new result in the array */
            if(result.length<=trace){
                dispatch(PushAnswer(check))
            }
        }
        setChecked(undefined);                               /**reset the value of the checked variable */
    }

    function onPrev() {
        // console.log('On Previous click');

        if (trace > 0) {
            dispatch(MovePrevQuestion())                   /**update the trace value by one using MoveNextAction */

        }
    }

    function onChecked(check) {
        // console.log(check);
        setChecked(check)

    }

    /** finished exam after the last question */
    if (result.length && result.length >= queue.length) {
        return <Navigate to={'/result'} replace={true}></Navigate>
    }
    return (
        <div className='container'>
            <h1 className='title'>Quiz Application</h1>

            <Questions onChecked={onChecked} />

            <div className='button'>
                {trace>0 ? <button className='btn btn-warning' onClick={onPrev}>Previous</button> : <div></div>}
                <button className='btn btn-success' onClick={onNext}>Next</button>

            </div>




        </div>
    )

}







export default Quiz;