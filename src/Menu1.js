// Menu1.js
import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Menu1 = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem>
          <ListItemText>
            <Link to="/menu1/documentos">Documentos</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/menu1/exames">Exames</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/menu1/resultados-exames">Resultados Exames</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/menu1/prontuario">Prontuário</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/menu1/internacao">Internação</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/menu1/hospital">Hospital</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/menu1/pronto-socorro">Pronto Socorro</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/">Sair</Link>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu1;
