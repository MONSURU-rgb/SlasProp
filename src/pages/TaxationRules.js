import React from 'react';
import TextEditor from '../components/TextEditor';
import { Box, Button, Typography } from '@mui/material';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const TaxationRules = () => {
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
            Taxation Rules
                    </Typography>

                    <Button
                        LinkComponent={Link}
                        to="/dashboard/manage-content"
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
            Update Content
                    </Button>
                </Box>

                <Box sx={{ marginLeft: '25%', mt: 4, pb: 2 }}>
                    <TextEditor />
                </Box>
            </Box>

            <Footer />
        </>
    );
};

export default TaxationRules;
