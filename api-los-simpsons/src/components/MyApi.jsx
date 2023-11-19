import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const MyApi = ({ filtro }) => {
  const url = "https://apisimpsons.fly.dev/api/personajes?limit=50&page=1";
//useState  
  const [info, setInfo] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const theSimpsonsApiData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Hay un error en la API");
      }
      const data = await res.json();
      setInfo(data.docs);
    } catch (error) {
      console.error({ message: error.message });
    }
  };

  useEffect(() => {
    theSimpsonsApiData();
  }, []);

  useEffect(() => {
    const searchTermLowerCase = filtro.toLowerCase();
    const filteredResult = info.filter((character) =>
      character.Nombre.toLowerCase().includes(searchTermLowerCase)
    );
    setFilteredData(filteredResult);
  }, [filtro, info]);

  return (
    <main>
      {filteredData.map((e) => (
        <div key={e._id} className='carta'>
          <Card className='card'>
            <Card.Img variant="top" src={e.Imagen} />
            <Card.Body className='text-css'>
              <Card.Title>{e.Nombre}</Card.Title>
              <Card.Text>{e.Historia}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </main>
  );
};

export default MyApi;
