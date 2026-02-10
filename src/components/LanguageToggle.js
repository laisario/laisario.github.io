import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language.startsWith('pt') ? 'pt' : 'en';

  return (
    <Box display={'flex'} gap={'0.5rem'} alignItems={'center'}>
      <Button
        onClick={() => changeLanguage('en')}
        sx={{
          minWidth: '40px',
          padding: '0.25rem 0.5rem',
          fontSize: '0.85rem',
          fontWeight: currentLang === 'en' ? 'bold' : 'normal',
          textDecoration: currentLang === 'en' ? 'underline' : 'none',
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        EN
      </Button>
      <span style={{ opacity: 0.5 }}>|</span>
      <Button
        onClick={() => changeLanguage('pt-BR')}
        sx={{
          minWidth: '40px',
          padding: '0.25rem 0.5rem',
          fontSize: '0.85rem',
          fontWeight: currentLang === 'pt' ? 'bold' : 'normal',
          textDecoration: currentLang === 'pt' ? 'underline' : 'none',
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        PT
      </Button>
    </Box>
  );
}
