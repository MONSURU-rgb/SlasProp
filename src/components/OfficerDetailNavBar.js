import {
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const OfficerDetailNavBar = (props) => {
    return (
        <>
            <List sx={{ display: 'flex', backgroundColor: '#DF593D' }}>
                <ListItem disablePadding sx={{ maxWidth: 100 }}>
                    <ListItemButton
                        component={Link}
                        to={`/dashboard/officer-details/${props.officerID}/tasks`}
                    >
                        <ListItemText
                            sx={{ color: 'white' }}
                            primaryTypographyProps={{ fontSize: '10px' }}
                            primary="TASKS"
                        />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ maxWidth: 100 }}>
                    <ListItemButton
                        component={Link}
                        to={`/dashboard/officer-details/${props.officerID}/location`}
                    >
                        <ListItemText
                            sx={{ color: 'white' }}
                            primaryTypographyProps={{ fontSize: '10px' }}
                            primary="LOCATION"
                        />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ maxWidth: 200 }}>
                    <ListItemButton
                        component={Link}
                        to={`/dashboard/officer-details/${props.officerID}/parcel-data-packets`}
                    >
                        <ListItemText
                            sx={{ color: 'white' }}
                            primaryTypographyProps={{ fontSize: '10px' }}
                            primary="PARCEL DATA PACKETS"
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <Outlet />
        </>
    );
};

export default OfficerDetailNavBar;
