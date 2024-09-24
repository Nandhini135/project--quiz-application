import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";


const ReslultTable =()=>{

    const [data, setData] = useState([])

    useEffect(()=>{
        // const l = 'http://localhost:5000';
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME }/api/result`,(res)=>{
            setData(res);
        })
    })

    return(
        <div>
            <table className="table table-striped">
                <thead >
                    <tr>
                        <th >Name</th>
                        <th>Attempts</th>
                        <th>Earn Points</th>
                        <th>Result</th>
                    </tr>

                </thead>
                <tbody>
                    {!data ?? <div>No Data Found</div>}
                    {data.map((v,i)=>(
                             <tr className="table-body" key={i}>
                             <td>{v?.username || ''}</td>
                             <td>{v?.attempts || 0}</td>
                             <td>{v?.points || 0}</td>
                             <td>{v?.achived || ""}</td>
                         </tr>
                    ))}
                   
                </tbody>
            </table>
        </div>
    )

}

















export default  ReslultTable;