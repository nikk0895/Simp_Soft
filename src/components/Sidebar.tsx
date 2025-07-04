import React, { JSX } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
//import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}


const Sidebar  = ({ open, onClose } :SidebarProps):JSX.Element => {
 // const navigate = useNavigate();
  const handleLogout = () => {
    alert('Logged out!');
    onClose();
  };

  //  const navItems = [
  //   { label: 'Menu', path: '/home' },
  //   { label: 'Profile', path: '/profile' },
  //   { label: 'Groups', path: '/about' },
  // ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        <ListItemButton onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItemButton>
 
      <Divider /> {/* Visual separation */}
 {/* Other Navigation Links */}
        {/* {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            onClick={() => {
              navigate(item.path);
              onClose(); // Close drawer after navigation
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))} */}

      </List>
    </Drawer>
  );
};

export default Sidebar;