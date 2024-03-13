import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function AddNewRoleDrawer () {
    const [open, setOpen] = React.useState(false);

    const [parentRole, setParentRole] = React.useState('');

    const handleChange = (event) => {
        setParentRole(event.target.value);
    };

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
          Add New Role
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
                <FormLabel sx={{ color: 'grey', fontSize: '12px' }}>
          Role Name
                </FormLabel>
                <TextField
                    placeholder="Enter Role Name"
                    size="small"
                    sx={{ mt: 1 }}
                    inputProps={{ style: { padding: 4 } }}
                />

                <FormLabel sx={{ color: 'grey', mt: 1, fontSize: '12px' }}>
          Enter Parent Role
                </FormLabel>
                <FormControl size="small" sx={{ mt: 1 }}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px' }}>
            Select
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={parentRole}
                        label="Parent Role"
                        onChange={handleChange}
                        style={{ height: 30 }}
                    >
                        <MenuItem value={10}>Demarcation Officer</MenuItem>
                        <MenuItem value={20}>GIS Officer</MenuItem>
                        <MenuItem value={30}>Registration Officer</MenuItem>
                        <MenuItem value={40}>Sensitization Officer</MenuItem>
                    </Select>
                </FormControl>

                <Typography
                    sx={{ color: 'orange', fontSize: '14px', mt: 1, fontWeight: 'bold' }}
                >
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
            Add Role
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
                    "backgroundColor": '#26a69a',
                    "color": 'white',
                    "borderRadius": '0px',
                    "ml": 2,
                    "p": 2,
                    "textTransform": 'capitalize',
                    '&:hover': { backgroundColor: '#26a69a' }
                }}
            >
                <AddIcon /> &nbsp;Add New Role
            </Button>

            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                {DrawerList}
            </Drawer>
        </Box>
    );
}
