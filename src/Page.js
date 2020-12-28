import React, {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Table from 'react-bootstrap/Table'
import "bootstrap/dist/css/bootstrap.min.css";

import data from './data/dataContext';



export default () => {
  const [usuarios, setUsers] = useState([]);
  useEffect(() => {
    const load = async () =>{
      const lista = await fetch(`https://api.github.com/users`)
      const response = await lista.json();
      setUsers(response.data.login);
      
    }
    load();
  }, [])
  console.log(usuarios)
  return (
   <div>
     
   </div>
  )
}