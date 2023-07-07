import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { ListItemIcon, ListItemText, IconButton, List } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
const pages = ['HOME', 'ABOUT', 'CONTACT', 'LOGIN'];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="red" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
