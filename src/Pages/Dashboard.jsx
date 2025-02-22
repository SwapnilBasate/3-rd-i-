import { useEffect } from 'react';
import './Dashboard.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Dashboard(){

    const navigate = useNavigate()
    useEffect (()=>{
        if(localStorage.getItem('user')===null){
          navigate('/login')
        }
   },[])

   const record = localStorage.getItem('record') ? JSON.parse(localStorage.getItem('record')) : []

    return(
        <>
        <div className="ap-list">
            <div className="title">
                <h2>Today's Appointment</h2>
            </div>
        
         <div className="view-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fullname</th>
                            <th>Time</th>
                            <th>Appointment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.length === 0 ? (
                                <tr>
                                    <td colSpan='4'>No Records Available</td>
                                </tr>
                            ) : (
                                record.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.roll}</td>
                                            <td>{item.name}</td>
                                            <td><NavLink to={"/view"+"/"+item.roll}>Veiw Details</NavLink></td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>

           
        </>
    )
}