import React from 'react';

import { Box, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Footer from '../components/Footer';
import AddNewRoleDrawer from '../components/AddNewRoleDrawer';

const UserRoles = () => {
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
          User Roles
                </Typography>

                <AddNewRoleDrawer />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginLeft: '25%',
                    mt: 2
                }}
            >
                <Box sx={{ border: '1px solid lightgrey', p: 3, display: 'flex' }}>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            End Users
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>

                <Box sx={{ border: '1px solid lightgrey', p: 3, display: 'flex' }}>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            GIS Officer
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>

                <Box sx={{ border: '1px solid lightgrey', p: 3, display: 'flex' }}>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            Registration Officer
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>

                <Box sx={{ border: '1px solid lightgrey', p: 3, display: 'flex' }}>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            Sensitization Officer
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginLeft: '25%',
                    mt: 2
                }}
            >
                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        p: 3,
                        display: 'flex',
                        marginRight: 2
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            Recording Officer
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>

                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        p: 3,
                        display: 'flex',
                        marginRight: 2
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            Field Assistant
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>

                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        p: 3,
                        display: 'flex',
                        marginRight: 2
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            SLTR Officer & Deputy SLTR Officer
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>

                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        p: 3,
                        display: 'flex',
                        marginRight: 2
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            Lands Records Bureau
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginLeft: '25%',
                    mt: 2,
                    mb: 14
                }}
            >
                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        p: 3,
                        display: 'flex',
                        marginRight: 2
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            Surveyor General
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>

                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        p: 3,
                        display: 'flex',
                        marginRight: 2
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            Cheif Registrar & Assistant Registrar of Deeds
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>

                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        p: 3,
                        display: 'flex',
                        marginRight: 2
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            Governors
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>

                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        p: 3,
                        display: 'flex',
                        marginRight: 2
                    }}
                >
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '13px', marginRight: 2 }}
                    >
            Contents & Attributes
                    </Typography>

                    <MoreVertIcon sx={{ color: 'orange' }} />
                </Box>
            </Box>

            <Footer />
        </>
    );
};

export default UserRoles;
