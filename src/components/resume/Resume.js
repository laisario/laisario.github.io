import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Resume() {
    const { t } = useTranslation();
    
    return (
        <Box minHeight={'calc(100vh - 175px)'} component={'main'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography my={4} variant='h1' fontWeight={'800'} fontSize={'36px'} textAlign={'center'}>
                {t('resume.title')}
            </Typography>
            <Typography mb={6} variant='body1' fontSize={'18px'} textAlign={'center'} maxWidth={'600px'}>
                {t('resume.description')}
            </Typography>
            <Box display={'flex'} gap={3} flexDirection={{xs: 'column', sm: 'row'}}>
                <Button 
                    variant='contained' 
                    size='large'
                    component="a"
                    href={`${process.env.PUBLIC_URL}/base-cv-en.pdf`}
                    target="_blank"
                    download="Laisa_Rio_CV_EN.pdf"
                    sx={{ minWidth: '200px' }}
                >
                    {t('resume.downloadEN')}
                </Button>
                <Button 
                    variant='contained' 
                    size='large'
                    component="a"
                    href={`${process.env.PUBLIC_URL}/base-cv-pt.pdf`}
                    target="_blank"
                    download="Laisa_Rio_CV_PT.pdf"
                    sx={{ minWidth: '200px' }}
                >
                    {t('resume.downloadPT')}
                </Button>
            </Box>
        </Box>
    )
}

export default Resume