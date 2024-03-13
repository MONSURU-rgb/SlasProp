import { Box, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import OfficerDetailNavBar from '../components/OfficerDetailNavBar';

const OfficerDetails = () => {
    const { state } = useLocation();

    return (
        <>
            <Box sx={{ minHeight: 500 }}>
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
            Officer Details
                    </Typography>
                </Box>

                <Box sx={{ marginLeft: '25%', mt: 2 }}>
                    <Typography
                        sx={{
                            backgroundColor: '#DFFBFE',
                            maxWidth: 110,
                            fontSize: 12,
                            pt: 1,
                            px: 1,
                            borderRadius: '4px'
                        }}
                    >
            ID: #{state?.officer.officerID}
                    </Typography>

                    <Box sx={{ border: '1px solid lightgrey', p: 2, display: 'flex' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRight: '2px solid lightgrey'
                            }}
                        >
                            <Typography
                                sx={{ color: 'grey', fontSize: '12px', pl: 2, mr: 15 }}
                            >
                Officer Name
                                <Typography
                                    sx={{ fontWeight: 'bold', color: 'black', fontSize: '12px' }}
                                >
                                    {state?.officer.name}
                                </Typography>
                            </Typography>

                            <Typography
                                sx={{ color: 'grey', mt: 1, fontSize: '12px', pl: 2, mr: 15 }}
                            >
                Contact Number
                                <Typography
                                    sx={{ fontWeight: 'bold', color: 'black', fontSize: '12px' }}
                                >
                                    {state?.officer.mobileNumber}
                                </Typography>
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRight: '2px solid lightgrey'
                            }}
                        >
                            <Typography
                                sx={{ color: 'grey', fontSize: '12px', pl: 2, mr: 15 }}
                            >
                Email ID
                                <Typography
                                    sx={{ fontWeight: 'bold', color: 'black', fontSize: '12px' }}
                                >
                                    {state?.officer.email}
                                </Typography>
                            </Typography>

                            <Typography
                                sx={{ color: 'grey', mt: 1, fontSize: '12px', pl: 2, mr: 15 }}
                            >
                User Role
                                <Typography
                                    sx={{ fontWeight: 'bold', color: 'black', fontSize: '12px' }}
                                >
                                    {state?.officer.role}
                                </Typography>
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ color: 'grey', fontSize: '12px', px: 2 }}>
                Zone
                                <Typography
                                    sx={{ fontWeight: 'bold', color: 'black', fontSize: '12px' }}
                                >
                                    {state?.officer.zone}
                                </Typography>
                            </Typography>

                            <Typography
                                sx={{ color: 'grey', mt: 1, fontSize: '12px', px: 2 }}
                            >
                Reporting Officer
                                <Typography
                                    sx={{ fontWeight: 'bold', color: 'black', fontSize: '12px' }}
                                >
                                    {state?.officer.reportingOfficer}{' '}
                                    <span style={{ color: '#DF593D' }}>
                                        {' '}
                    (Registration Offficer)
                                    </span>
                                </Typography>
                            </Typography>
                        </Box>
                    </Box>

                    <OfficerDetailNavBar officerID={state?.officer.officerID} />
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default OfficerDetails;
