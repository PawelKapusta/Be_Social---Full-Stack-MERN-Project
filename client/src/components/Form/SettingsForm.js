import React, {useEffect, useState} from 'react';
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {createUser, getUsers} from "../../actions/users";
import {makeStyles} from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const Column = styled.div`
  display: table-cell;
`;
const Row = styled.div`
  display: table;
  table-layout: fixed;
  border-spacing: 14px;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  root2: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    width: 550
  },
  parent: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(3),
    width: 500,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  buttonSubmit: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 10,
    width: 100
  },
}));
const columns = [
  { id: 'Id', label: 'Id', minWidth: 10,align: 'right' },
  { id: 'FullName', label: 'Full Name', minWidth: 100 },
];

const SettingsForm = () => {
  const dispatch= useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.users);
  console.log(users)
  const [userData, setUserData] = useState({fullName: ''})
  const clear = () => {
    setUserData({ fullName: '' });
  };
  const handleSubmit =   (e) => {{
      dispatch(createUser(userData));
    }
    clear();
  }
  useEffect(() => {
    dispatch(getUsers());
  },[dispatch] );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 return (
  <div className={classes.parent}>
    <Column>
      <Row>


  <Paper className={classes.paper}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
      <Column>
        <Row>
          <Typography variant="h5" style={{fontSize: 30}}>Creating a User</Typography>
        </Row>
      </Column>
      <TextField name="FullName" variant="outlined" label="Full Name" fullWidth value={userData.fullName}
                 onChange={(e) => setUserData({...userData, fullName: e.target.value})}/>

                   <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit"
                           fullWidth style={{marginRight: 50}}>Submit</Button>
                   <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
  </Paper>
        </Row>
      <Row>
    <Paper className={classes.root2}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
               <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth, fontSize: 25 }}
               >
                 {column.label}
               </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => {
              return (
               <TableRow hover role="checkbox" tabIndex={-1} key={user.Id} >
                 {columns.map((column) => {
                   const value = user[column.id];
                   return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                   );
                 })}
               </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
       rowsPerPageOptions={[10, 25, 100]}
       component="div"
       count={users.length}
       rowsPerPage={rowsPerPage}
       page={page}
       onChangePage={handleChangePage}
       onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
      </Row>
    </Column>
  </div>
  )

}


export default SettingsForm;