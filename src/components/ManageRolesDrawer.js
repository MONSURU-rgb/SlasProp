import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    IconButton,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ManageRolesDrawer (props) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 400, display: 'flex', flexDirection: 'column' }}
            role="presentation"
        >
            <Box sx={{ display: 'flex', backgroundColor: '#26a69a', p: 2 }}>
                <Typography
                    sx={{
                        flexGrow: 1,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '14px'
                    }}
                >
          Manage Roles
                </Typography>
                <IconButton
                    sx={{
                        "backgroundColor": 'white',
                        "maxWidth": '20px',
                        "maxHeight": '20px',
                        '&:hover': { backgroundColor: 'white' }
                    }}
                    onClick={toggleDrawer(false)}
                >
                    <CloseIcon sx={{ color: 'red', fontSize: '14px' }} />
                </IconButton>
            </Box>

            <Box sx={{ px: 4, pt: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ px: 2, py: 1, fontSize: '14px' }}>
            Officer Name: {props.officer.name}
                    </Typography>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ color: 'lightgrey' }}
                    />
                    <Typography sx={{ px: 2, py: 1, fontSize: '14px' }}>
            Officer Type: {props.officer.role}
                    </Typography>
                </Box>

                <Typography sx={{ fontSize: '14px', mt: 1, fontWeight: 'bold' }}>
          User Can
                </Typography>

                <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="View"
                    />
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="Delete"
                    />
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="Add"
                    />
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="Edit"
                    />
                    <FormControlLabel
                        componentsProps={{
                            typography: { fontSize: '10px', fontWeight: 'bold' }
                        }}
                        control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                        label="Block"
                    />
                </FormGroup>

                <Typography sx={{ fontSize: '14px', mt: 1, fontWeight: 'bold' }}>
          Permissions
                </Typography>

                <Box
                    sx={{
                        backgroundColor: '#F3F3F3',
                        borderRadius: 4,
                        border: '1px solid gray',
                        p: 2
                    }}
                >
                    <Box sx={{ display: 'flex', px: 1, backgroundColor: 'white' }}>
                        <FormGroup sx={{ flexGrow: 1 }}>
                            <FormControlLabel
                                componentsProps={{
                                    typography: { fontSize: '10px', fontWeight: 'bold' }
                                }}
                                control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                                label="DASHBOARD"
                            />
                        </FormGroup>
                        <KeyboardArrowDownIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box
                        sx={{
                            borderTop: '1px solid lightgray',
                            backgroundColor: 'white',
                            py: 0.5,
                            pl: 1
                        }}
                    >
                        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel
                                componentsProps={{
                                    typography: {
                                        fontSize: '6px',
                                        color: 'grey',
                                        fontWeight: 'bold'
                                    }
                                }}
                                control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                                label="All"
                            />
                            <FormControlLabel
                                componentsProps={{
                                    typography: {
                                        fontSize: '6px',
                                        color: 'grey',
                                        fontWeight: 'bold'
                                    }
                                }}
                                control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                                label="VIEW"
                            />
                            <FormControlLabel
                                componentsProps={{
                                    typography: {
                                        fontSize: '6px',
                                        color: 'grey',
                                        fontWeight: 'bold'
                                    }
                                }}
                                control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                                label="ADD"
                            />
                            <FormControlLabel
                                componentsProps={{
                                    typography: {
                                        fontSize: '6px',
                                        color: 'grey',
                                        fontWeight: 'bold'
                                    }
                                }}
                                control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                                label="EDIT"
                            />
                            <FormControlLabel
                                componentsProps={{
                                    typography: {
                                        fontSize: '6px',
                                        color: 'grey',
                                        fontWeight: 'bold'
                                    }
                                }}
                                control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                                label="DELETE"
                            />
                        </FormGroup>
                    </Box>
                    <Box sx={{ display: 'flex', px: 1, mt: 1, backgroundColor: 'white' }}>
                        <FormGroup sx={{ flexGrow: 1 }}>
                            <FormControlLabel
                                componentsProps={{
                                    typography: { fontSize: '10px', fontWeight: 'bold' }
                                }}
                                control={<Checkbox size="small" sx={{ color: '#26a69a' }} />}
                                label="MANAGE ROLES"
                            />
                        </FormGroup>
                        <KeyboardArrowDownIcon sx={{ color: 'gray' }} />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        size="medium"
                        onClick={toggleDrawer(false)}
                        sx={{
                            "backgroundColor": '#26a69a',
                            '&:hover': { backgroundColor: '#26a69a' },
                            "borderRadius": '16px',
                            "boxShadow": '10px 10px 5px #269d91 inset',
                            "width": '150px'
                        }}
                    >
            Update
                    </Button>
                </Box>
            </Box>
        </Box>
    );

    return (
        <Box component="div">
            <Button
                onClick={toggleDrawer(true)}
                sx={{
                    ml: -1,
                    color: 'black',
                    textTransform: 'capitalize',
                    fontSize: '15px',
                    py: -1
                }}
            >
        Manage Roles
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                {DrawerList}
            </Drawer>
        </Box>
    );
}
