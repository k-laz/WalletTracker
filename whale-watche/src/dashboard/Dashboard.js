import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

// import logo from "./logo.png";
class CryptoWalletTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', apidata: '', image: 'https://logos.covalenthq.com/tokens/1/0xb8c77482e45f1f44de1745f52c74426c631bdd52.png'};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    //console.log('https://api.covalenthq.com/v1/1/address/' + this.state.value + '/balances_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:')
    //fetch('https://api.covalenthq.com/v1/1/transaction_v2/0xbda92389200cadac424d64202caeab70cd5e93756fe34c08578adeb310bba254/?key=ckey_dc5027f0ba21436ab4bd0ae837a:')
    //fetch('https://api.covalenthq.com/v1/1/address/demo.eth/balances_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:')
    //portfolio_v2/  -- Get historical portfolio value over time
    //https://api.covalenthq.com/v1/1/tokens/0xfc811061134fa6ccfd22f56cc91bf6450bea2d01/nft_transactions/123/

    //https://api.covalenthq.com/v1/1/address/0xa79E63e78Eec28741e711f89A672A4C40876Ebf3/transactions_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:


    //https://api.covalenthq.com/v1/1/address/0xfc811061134fa6ccfd22f56cc91bf6450bea2d01/transactions_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:
    fetch('https://api.covalenthq.com/v1/1/address/' + this.state.value + '/balances_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:')
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      console.log(json.data.items[5].logo_url);
      this.setState({ apidata: json, image: json.data.items[2].logo_url});
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div>
        {/* <img className="whale-logo" src={require(/whale-watche/src/dashboard/logo.jpg)} alt="Large" /> */}
        <img className="logo" src={this.state.image} height="20px" width="20px" alt="Coin" />
        <form onSubmit={this.handleSubmit}>
        <label>
          Wallet Address:
          <input type="text" name="address" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />

      </form>
      </div>
      

    );
  }
}

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* ==============================================================~~~~~~~~~~~~~~~~~~~~~ */}
              
              {/* Recent Orders */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <CryptoWalletTracker /> 
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
