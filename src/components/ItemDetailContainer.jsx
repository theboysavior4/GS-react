import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../mock/Asynmock';
import ItemDetail from './ItemDetail';
import { dataBase } from '../service/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(dataBase, "products");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getOneProduct('03')
      .then((res) => setDetail(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;

