import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {
    Divider,
    FormControl,
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

export default function AddNewOfficerDrawer () {
    const [open, setOpen] = React.useState(false);

    const [parentRole, setParentRole] = React.useState('');
    const [officerType, setOfficerType] = React.useState('');
    const [reportingOfficer, setReportingOfficer] = React.useState('');
    const [location, setLocation] = React.useState('');

    const handleParentRoleChange = (event) => {
        setParentRole(event.target.value);
    };

    const handleReportingOfficerChange = (event) => {
        setReportingOfficer(event.target.value);
    };

    const handleOfficerTypeChange = (event) => {
        setOfficerType(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
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
          Add New Officer
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
                <Typography sx={{ color: '#26a69a', fontSize: '12px' }}>
          Please fill th e details to add new officer{' '}
                </Typography>

                <FormLabel sx={{ mt: 2, color: 'grey', fontSize: '12px' }}>
          Name of the Officer
                </FormLabel>
                <TextField
                    size="small"
                    sx={{ mt: 1 }}
                    inputProps={{ style: { padding: 4 } }}
                />

                <FormLabel sx={{ color: 'grey', mt: 1, fontSize: '12px' }}>
          Select Role
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
                        onChange={handleParentRoleChange}
                        style={{ height: 30 }}
                    >
                        <MenuItem value={10}>Demarcation Officer</MenuItem>
                        <MenuItem value={20}>GIS Officer</MenuItem>
                        <MenuItem value={30}>Registration Officer</MenuItem>
                        <MenuItem value={40}>Sensitization Officer</MenuItem>
                    </Select>
                </FormControl>

                <FormLabel sx={{ color: 'grey', mt: 1, fontSize: '12px' }}>
          Location
                </FormLabel>
                <FormControl size="small" sx={{ mt: 1 }}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px' }}>
            Select
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={location}
                        label="Parent Role"
                        onChange={handleLocationChange}
                        style={{ height: 30 }}
                    >
                        <MenuItem value={10}>Nigeria</MenuItem>
                        <MenuItem value={20}>Ghana</MenuItem>
                        <MenuItem value={30}>Unite States</MenuItem>
                    </Select>
                </FormControl>

                <FormLabel sx={{ color: 'grey', mt: 1, fontSize: '12px' }}>
          Reporting Officer Type
                </FormLabel>
                <FormControl size="small" sx={{ mt: 1 }}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px' }}>
            Select
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={officerType}
                        label="Parent Role"
                        onChange={handleOfficerTypeChange}
                        style={{ height: 30 }}
                    >
                        <MenuItem value={10}>Demarcation Officer</MenuItem>
                        <MenuItem value={20}>GIS Officer</MenuItem>
                        <MenuItem value={30}>Registration Officer</MenuItem>
                    </Select>
                </FormControl>

                <FormLabel sx={{ color: 'grey', mt: 1, fontSize: '12px' }}>
          Reporting Officer
                </FormLabel>
                <FormControl size="small" sx={{ mt: 1 }}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px' }}>
            Select
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={reportingOfficer}
                        label="Parent Role"
                        onChange={handleReportingOfficerChange}
                        style={{ height: 30 }}
                    >
                        <MenuItem value={10}>Demarcation Officer</MenuItem>
                        <MenuItem value={20}>GIS Officer</MenuItem>
                        <MenuItem value={30}>Registration Officer</MenuItem>
                    </Select>
                </FormControl>

                <Divider sx={{ width: '100%' }} />

                <Typography sx={{ fontWight: 'bold', mt: 2, fontSize: '14px' }}>
          Login Details
                </Typography>

                <FormLabel sx={{ mt: 1, color: 'grey', fontSize: '12px' }}>
          Login ID:
                </FormLabel>
                <TextField
                    size="small"
                    sx={{ mt: 1 }}
                    inputProps={{ style: { padding: 4 } }}
                />

                <FormLabel sx={{ mt: 1, color: 'grey', fontSize: '12px' }}>
          Create Password
                </FormLabel>
                <TextField
                    size="small"
                    sx={{ mt: 1 }}
                    inputProps={{ style: { padding: 4 } }}
                />

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
            Add Officer
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
                <AddIcon /> &nbsp;Add New Officer
            </Button>

            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                {DrawerList}
            </Drawer>
        </Box>
    );
}
