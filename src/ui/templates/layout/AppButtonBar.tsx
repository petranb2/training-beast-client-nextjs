import React, { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { AuthContext } from "../user/context/authContext";
import { LayoutContext } from "./context/layoutContext";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    mainMenu: {
        marginTop: theme.spacing(4),
    },
    sideMenu: {
        marginTop: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
        "font-style": "italic",
    },
    logo: {
        maxHeight: "60px",
        margin: theme.spacing(1),
    }
}));

function ButtonAppBar() {
    const router = useRouter()
    const MAIN_MENU = "MAIN_MENU";
    const SIDE_MENU = "SIDE_MENU";
    const layoutContext = useContext(LayoutContext);
    const authContext = useContext(AuthContext);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorSideMenuEl, setAnchorSideMenuEl] = React.useState(null);
    const open = Boolean(anchorSideMenuEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const redirect = (route: string, menu: string) => {
        router.push(route);
        if (menu === MAIN_MENU) {
            setAnchorEl(null);
        }
        if (menu === SIDE_MENU) {
            setAnchorSideMenuEl(null);
        }
    };

    const handleMenu = (event: any) => {
        setAnchorSideMenuEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorSideMenuEl(null);
    };
    return (
        <div className={classes.root}>
            <Head>
                <title>TrainingBeast</title>
                <meta property="og:title" content="TrainingBeast" key="title" />
            </Head>
            <AppBar position="static">
                <Container maxWidth="lg" disableGutters>
                    <Toolbar>
                        {false && (
                            <Hidden>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleClick}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: { maxWidth: "1250px", width: "calc(100% - 2rem)" },
                                    }}
                                    className={classes.mainMenu}
                                >
                                    <MenuItem onClick={() => redirect("/", MAIN_MENU)}>
                                        Home
                  </MenuItem>
                                    <MenuItem onClick={() => redirect("/programs", MAIN_MENU)}>
                                        Programms
                  </MenuItem>
                                    <MenuItem
                                        onClick={() => redirect("/programs/new", MAIN_MENU)}
                                    >
                                        New Programm
                  </MenuItem>
                                    <MenuItem onClick={() => redirect("/calendar", MAIN_MENU)}>
                                        Calendar
                  </MenuItem>
                                    <MenuItem onClick={() => redirect("/sign-out", MAIN_MENU)}>
                                        Logout
                  </MenuItem>
                                </Menu>
                            </Hidden>
                        )}

                        {/* <img alt="dragon" src={require('../assets/head_no_glow.png')} className={classes.logo} /> */}
                        <div style={{ flexGrow: 1 }}>
                            <Image alt="dragon" loading='eager' src={'/text.png'} priority className={classes.logo} width={"220px"}
                                height={"36px"} />
                        </div>


                        {!authContext.auth && (
                            <>

                            </>
                        )}

                        {authContext.auth && (
                            <>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <Avatar
                                        alt={authContext?.username?.toUpperCase()}
                                        src={`https://thebeast-assets.ams3.cdn.digitaloceanspaces.com/${authContext.profilePic}`}
                                    />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorSideMenuEl}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                    className={classes.sideMenu}
                                >
                                    <MenuItem onClick={() => redirect("/programs", SIDE_MENU)}>
                                        Explore programs
                  </MenuItem>
                                    <hr />
                                    <MenuItem onClick={() => redirect("/calendar", SIDE_MENU)}>
                                        Calendar
                  </MenuItem>
                                    <MenuItem
                                        onClick={() => redirect("/programs/new", SIDE_MENU)}
                                    >
                                        New Program Template
                  </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            redirect("/template/all-programs", SIDE_MENU)
                                        }
                                    >
                                        Program Templates
                  </MenuItem>
                                    <hr />
                                    <MenuItem onClick={() => redirect("/profile", SIDE_MENU)}>
                                        Profile
                  </MenuItem>
                                    <MenuItem onClick={() => redirect("/settings", SIDE_MENU)}>
                                        Settings
                  </MenuItem>
                                    <hr />
                                    <MenuItem onClick={() => redirect("/sign-out", SIDE_MENU)}>
                                        Logout
                  </MenuItem>
                                </Menu>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
            {layoutContext.linearProgress && <LinearProgress />}
        </div>
    );
}

export default ButtonAppBar;
