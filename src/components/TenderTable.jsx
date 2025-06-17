
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function TenderTable(props) {
 const [data, setData] = useState([])

 useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users') // get request send to fetch api
    //.then(res => console.log(res)) // all response data display
    .then(res => setData(res.data)) // res.data array store data state variable using setData() method
    .catch(err => console.log(err));
 }, [])
    return (
        <div className='container'>
            <h3>Fetch Data from API with Axios</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    data.map((user) => {
                        return(
                           <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                          </tr>
                        )
                    })
                   } 
                </tbody>
            </table>
        </div>
    );
}

export default TenderTable;