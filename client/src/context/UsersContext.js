import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const UsersContext = createContext({ users: [], setUsers: () => {} });

export const UsersProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get('http://localhost:5000/joinTables');
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
   <UsersContext.Provider value={{ users, setUsers }}>
     {props.children}
   </UsersContext.Provider>
  );
};

export default UsersContext;