import React, { useContext, useEffect } from 'react';
import { DetailContext } from '../context/detailContext';
import { useParams } from 'react-router-dom';

function Detail() {
  const { fetchData } = useContext(DetailContext);
  const { id } = useParams() as { id: string };
  useEffect(() => {
    fetchData(id);
  }, [id]);
  return <div>Detail</div>;
}

export default Detail;
