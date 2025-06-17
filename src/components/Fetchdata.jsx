import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fetchdata() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const response = await axios.get('https://tenders.guru/api/es/tenders');
        setTenders(response.data.data); 
      } catch (error) {
        console.error('Error fetching tenders:', error);
      }
    };

    fetchTenders();
  }, []);

  return (
    <div className="container">
      <h2>Spanish Tenders</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            tenders.map((tender) => (
              <tr key={tender.id}>
                <td>{tender.id}</td>
                <td>{tender.created_at}</td>
                <td>{tender.title}</td>
                <td>{tender.cpv?.name || 'N/A'}</td>
              </tr>    
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Fetchdata;
