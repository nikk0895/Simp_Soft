import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'Profile', path: '/profile' },
    { label: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
          Quality App
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button key={item.path} color="inherit" onClick={() => navigate(item.path)}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;