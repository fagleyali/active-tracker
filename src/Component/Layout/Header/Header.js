import React from 'react';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer';
import CssBaseLine from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
const drawerWidth = 240;
const menuItems = [{Patient:'/patients'}, {Referral:'/referral'}, {Clinics:'/clinics'}, {Attorneys:'/attorneys'}];
const items = menuItems.map(e=>Object.entries(e)[0])

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,

    },
}));

const Header = (props) => {
    const classes = useStyles();
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);
    const handleDraweropen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }
    const preventDefault = event => event.preventDefault();


    return (
           
        <div className={classes.root}>
            <CssBaseLine />
            <AppBar
                position='static'
                className={clsx(classes.appBar, { [classes.appBarShift]: open })}

            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDraweropen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Accident Center of Texas
                    </Typography>
                    <Button component={Link} color='inherit' to='/'>Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {items.map((e,i) => ( 
                        
                        
                        <ListItem button >
                            <ListItemIcon>{<LocalHospitalTwoToneIcon />}</ListItemIcon>
                            <Link to={e[1]} variant="body2">
                            <ListItemText primary={e[0]}  />
                            </Link>
                        </ListItem>
                        
                    ))}
                </List>

            </Drawer>

        </div>

    )

}

export default Header