
import { useEffect,useState } from 'react';
// import data,{answers} from "../database/data"
import { useDispatch } from 'react-redux';

/**redux actions */
import * as Action from '../redux/question_reducer'
import { getServerData } from '../helper/helper';

 
/**fetch question hook to fetch api data and set value to store */

const useFetchQuestion =()=>{

    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading:false, apiData:[], serverError: null})


useEffect(()=>{
    setGetData(prev => ({...prev, isloading: true }));

 
/**async function fetch backend data */

(async ()=>{
    try{
        // const l = 'http://localhost:5000'
        const [{questions, answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data)=>data)
        console.log({questions, answers});
        

        if(questions.length>0){
            setGetData(prev =>({...prev, isLoading:false}));
            setGetData(prev =>({...prev, apiData: questions}));
 
            /**dispatch an action */ 
            dispatch(Action.startExamAction({question:questions,answers}))
        }else{
            throw new Error("No Question Available");
        }
    } 
    catch(error){
        setGetData(prev =>({...prev, isLoading:false}));
        setGetData(prev =>({...prev,serverError:error}));
    }
})();
},[dispatch])

return [getData,setGetData]

}


/** MoveAction Dispatch function */
export const MoveNextQuestion =()=>async(dispatch)=>{
    try{
        dispatch(Action.moveNextAction());  // increase trace value
    }
    catch(error){
        console.log(error);
        
    }
}

/**PrevAction Dispatch function */
export const MovePrevQuestion =()=>async(dispatch)=>{
    try{
        dispatch(Action.movePrevAction());   // Decrease trace value
    }
    catch(error){
        console.log(error);
        
    }
}



export default useFetchQuestion ;




