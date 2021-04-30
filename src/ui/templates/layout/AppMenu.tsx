import React, { useContext, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useRouter } from 'next/router';
import { AuthContext } from "../user/context/authContext";

const useStyles = makeStyles((theme: Theme) => ({
    sideMenu: {
        marginTop: theme.spacing(4),
    },
}));

function AppMenu() {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    const classes = useStyles();
    const [anchorSideMenuEl, setAnchorSideMenuEl] = useState(null);
    const open = Boolean(anchorSideMenuEl);

    const handleMenu = (event: any) => {
        setAnchorSideMenuEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorSideMenuEl(null);
    };
    return (
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
                    src={`https://files.trainingbeast.co/file/tbc-files/${authContext.profilePic}`}
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
                <MenuItem onClick={() => router.push("/programs")}>
                    Explore programs
                                    </MenuItem>
                <hr />
                <MenuItem onClick={() => router.push("/calendar")}>
                    Calendar
                                    </MenuItem>
                <MenuItem
                    onClick={() => router.push("/programs/new")}
                >
                    New Program Template
                                    </MenuItem>
                <MenuItem
                    onClick={() =>
                        router.push("/template/all-programs")
                    }
                >
                    Program Templates
                                    </MenuItem>
                <hr />
                <MenuItem onClick={() => window.location.replace(`/@${authContext.username}`)}>
                    Profile
                                    </MenuItem>
                <MenuItem onClick={() => router.push("/profile/settings")}>
                    Settings
                                    </MenuItem>
                <hr />
                <MenuItem onClick={() => router.push("/sign-out")}>
                    Logout
                                    </MenuItem>
            </Menu>
        </>
    );
}

export default AppMenu;
