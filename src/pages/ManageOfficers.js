import React, { useState } from 'react';

import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import DropDownMenu from '../components/DropDownMenu';
import Footer from '../components/Footer';
import AddNewOfficerDrawer from '../components/AddNewOfficerDrawer';

const officers = [
    {
        name: 'Indrani Sen',
        officerID: '57368262832',
        mobileNumber: '638131931',
        email: 'indraniSen@gmail.com',
        zone: 'North',
        reportingOfficer: 'Aridam Dutta',
        role: 'GIS Officer'
    },
    {
        name: 'Indrani Sen',
        officerID: '57362262832',
        mobileNumber: '638131931',
        email: 'indraniSen@gmail.com',
        zone: 'North',
        reportingOfficer: 'Aridam Dutta',
        role: 'Registration Officer'
    },
    {
        name: 'Indrani Sen',
        mobileNumber: '638131931',
        officerID: '57368162112',
        email: 'indraniSen@gmail.com',
        zone: 'North',
        reportingOfficer: 'Aridam Dutta',
        role: 'Recording Officer'
    },
    {
        name: 'Indrani Sen',
        mobileNumber: '638131931',
        officerID: '57368162432',
        email: 'indraniSen@gmail.com',
        zone: 'North',
        reportingOfficer: 'Aridam Dutta',
        role: 'Demarcation Officer'
    }
];

const ManageOfficers = () => {
    const [officer, setOfficer] = useState('');

    const handleChange = (event) => {
        setOfficer(event.target.value);
    };

    return (
        <>
            <Box
                sx={{
                    marginLeft: '25%',
                    mt: 4,
                    borderBottom: '1px solid lightgray',
                    pb: 2,
                    display: 'flex'
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
          Manage Officers
                </Typography>

                <Button
                    sx={{
                        color: '#26a69a',
                        border: '1px solid #26a69a',
                        borderRadius: '0px',
                        p: 2,
                        textTransform: 'capitalize'
                    }}
                >
                    <ExitToAppIcon /> &nbsp;Export
                </Button>

                <AddNewOfficerDrawer />
            </Box>

            <Box sx={{ marginLeft: '25%', mt: 2, display: 'flex' }}>
                <Typography
                    sx={{
                        color: '#26a69a',
                        fontWeight: 'bold',
                        fontSize: 16,
                        flexGrow: 1
                    }}
                >
                    {officers.length} Officers
                </Typography>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: 'grey' }} />
                            </InputAdornment>
                        )
                    }}
                    size="small"
                    label="Search By Name"
                />

                <FormControl sx={{ ml: 2, minWidth: 150 }} size="small">
                    <InputLabel id="demo-simple-select-label">Officer Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={officer}
                        label="Officer"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Demarcation Officer</MenuItem>
                        <MenuItem value={20}>GIS Officer</MenuItem>
                        <MenuItem value={30}>Registration Officer</MenuItem>
                        <MenuItem value={40}>Sensitization Officer</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {officers.map((officer) => (
                <Box sx={{ marginLeft: '25%', mt: 2 }}>
                    <Typography
                        sx={{
                            backgroundColor: '#DFFBFE',
                            maxWidth: '150px',
                            px: 1,
                            borderRadius: '4px'
                        }}
                    >
            ID: #{officer.officerID}
                    </Typography>
                    <Box sx={{ border: '1px solid lightgrey', p: 2, display: 'flex' }}>
                        <Typography
                            sx={{
                                color: 'lightgrey',
                                fontSize: '14px',
                                borderRight: '2px solid lightgrey',
                                px: 4
                            }}
                        >
              Name
                            <Typography
                                sx={{ fontWeight: 'bold', color: 'black', fontSize: '16px' }}
                            >
                                {officer.name}
                            </Typography>
                        </Typography>

                        <Typography
                            sx={{
                                color: 'lightgrey',
                                fontSize: '14px',
                                borderRight: '2px solid lightgrey',
                                px: 4
                            }}
                        >
              Mobile Number
                            <Typography
                                sx={{ fontWeight: 'bold', color: 'black', fontSize: '16px' }}
                            >
                                {officer.mobileNumber}
                            </Typography>
                        </Typography>

                        <Typography
                            sx={{
                                color: 'lightgrey',
                                fontSize: '14px',
                                borderRight: '2px solid lightgrey',
                                px: 4
                            }}
                        >
              Email Address
                            <Typography
                                sx={{ fontWeight: 'bold', color: 'black', fontSize: '16px' }}
                            >
                                {officer.email}
                            </Typography>
                        </Typography>

                        <Typography sx={{ display: 'flex' }}>
                            <Typography
                                sx={{
                                    color: 'lightgrey',
                                    fontSize: '14px',
                                    pl: 4,
                                    pr: 2,
                                    flexGrow: 1
                                }}
                            >
                User Role
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        color: '#EA8B73'
                                    }}
                                >
                                    {officer.role}
                                </Typography>
                            </Typography>
                            <DropDownMenu officer={officer} />
                        </Typography>
                    </Box>
                </Box>
            ))}

            <Box sx={{ mb: 4 }} />
            <Footer />
        </>
    );
};

export default ManageOfficers;
