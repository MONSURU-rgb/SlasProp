import { Box, Typography } from '@mui/material';
import React from 'react';

const ParcelDataPackets = () => {
    const parcelpackets = [
        {
            name: 'John Doe',
            taxID: 'HGFFT23T821',
            landType: 'Sample Data',
            area: 478,
            regNumber: 3246745335,
            location: 'Sample Data',
            address: '17917 Holderness Ln, Pflugerville, TX 78660',
            zip: '78660'
        },

        {
            name: 'John Doe',
            taxID: 'HGFFT211T21',
            landType: 'Sample Data',
            area: 172,
            regNumber: 3246721335,
            location: 'Sample Data',
            address: '17917 Holderness Ln, Pflugerville, TX 78660',
            zip: '78260'
        }
    ];

    return (
        <Box sx={{ mt: 2, mb: 3 }}>
            {parcelpackets.map((packet) => (
                <Box sx={{ border: '1px solid lightgray', mb: 4 }}>
                    <Box sx={{ display: 'flex', pl: 6 }}>
                        <Typography
                            sx={{
                                borderRight: '1px solid lightgray',
                                px: 4,
                                py: 2,
                                fontSize: '12px',
                                color: 'grey'
                            }}
                        >
              Property Owner Name
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                {packet.name}
                            </Typography>
                        </Typography>
                        <Typography
                            sx={{
                                borderRight: '1px solid lightgray',
                                py: 2,
                                px: 4,
                                fontSize: '12px',
                                color: 'grey'
                            }}
                        >
              Type Of Land
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                {packet.landType}
                            </Typography>
                        </Typography>
                        <Typography sx={{ display: 'flex' }}>
                            <Typography
                                sx={{
                                    px: 4,
                                    py: 2,
                                    fontSize: '12px',
                                    color: 'grey',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1
                                }}
                            >
                Registration Number
                                <Typography
                                    sx={{ color: 'black', fontWeight: 'bold', margin: 'auto' }}
                                >
                                    {packet.regNumber}
                                </Typography>
                            </Typography>
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', border: '1px solid lightgray', pl: 6 }}>
                        <Typography
                            sx={{
                                borderRight: '1px solid lightgray',
                                py: 2,
                                pl: 4,
                                pr: 5.5,
                                fontSize: '12px',
                                color: 'grey'
                            }}
                        >
              Property Tax ID
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                {packet.taxID}
                            </Typography>
                        </Typography>
                        <Typography
                            sx={{
                                borderRight: '1px solid lightgray',
                                py: 2,
                                pl: 4,
                                pr: 7.25,
                                fontSize: '12px',
                                color: 'grey'
                            }}
                        >
              Area Of Land
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                {packet.area}
                            </Typography>
                        </Typography>
                        <Typography sx={{ py: 2, px: 4, fontSize: '12px', color: 'grey' }}>
              Location
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                {packet.location}
                            </Typography>
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', pl: 6 }}>
                        <Typography
                            sx={{
                                borderRight: '1px solid lightgray',
                                py: 2,
                                pr: 13.5,
                                fontSize: '12px',
                                color: 'grey'
                            }}
                        >
              ZIP/ PIN Code
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                {packet.zip}
                            </Typography>
                        </Typography>
                        <Typography sx={{ px: 4, py: 2, fontSize: '12px', color: 'grey' }}>
              Registration Address
                            <Typography sx={{ color: 'black', fontWeight: 'bold' }}>
                                {packet.address}
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default ParcelDataPackets;
