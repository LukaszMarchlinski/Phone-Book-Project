import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { HeadTitle } from 'components/UI/HeadTitle/HeadTitle';
import { Wrapper } from 'components/LoginForm/LoginForm.Styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <HeadTitle title={'Login page'} mb={500} size={30} />

      <Box component="form" onSubmit={handleFormSubmit}>
        <FormControl sx={{ width: '25ch', mt: 1 }}>
          <div>
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              color="info"
              sx={{ 
                mb: 2, 
                width: '25ch',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white', // Ustaw kolor tła dla całego pola tekstowego
                  '& fieldset': {
                    borderColor: '#54b95f', // Kolor obramowania
                    borderWidth: '3px',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1c84fa', // Kolor ramki podczas najechania
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1c84fa', // Kolor ramki podczas fokusa
                    borderWidth: '3px',
                  },
                  '& input': {
                    color: 'black', // Kolor tekstu wewnątrz pola
                    backgroundColor: 'white', // Kolor tła wewnątrz pola
                  },
                  '& input::placeholder': {
                    color: 'black', // Kolor tekstu placeholdera
                  },
                  // Stylizacja dla autofill
                  '& input:-webkit-autofill': {
                    backgroundColor: 'white !important', // Kolor tła po automatycznym wypełnieniu
                    WebkitBoxShadow: '0 0 0 100px white inset', // Zapewnia, że tło pozostaje białe
                    WebkitTextFillColor: 'black !important', // Kolor tekstu po automatycznym wypełnieniu
                  },
                  // Dodatkowe pseudo-stany dla autofill
                  '& input:-webkit-autofill:hover': {
                    backgroundColor: 'white !important', // Kolor tła po automatycznym wypełnieniu przy najechaniu
                  },
                  '& input:-webkit-autofill:focus': {
                    backgroundColor: 'white !important', // Kolor tła po automatycznym wypełnieniu przy fokusu
                  },
                  '& input:-webkit-autofill:active': {
                    backgroundColor: 'white !important', // Kolor tła po automatycznym wypełnieniu przy aktywacji
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'black', // Kolor etykiety w normalnym stanie
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#93F600', // Kolor etykiety podczas fokusa
                  fontSize: '20px',
                  transform: 'translate(14px, -12px) scale(0.75)', // Transformacja etykiety w stanie focus
                  backgroundColor: 'white', // Kolor tła etykiety w stanie focus
                  padding: '0 4px',
                },
              }}
            />

            <TextField
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              color="info"
              sx={{ 
                mb: 2, 
                width: '25ch',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white', // Kolor tła dla całego pola tekstowego
                  '& fieldset': {
                    borderColor: '#54b95f', // Kolor obramowania
                    borderWidth: '3px',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1c84fa', // Kolor ramki podczas najechania
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1c84fa', // Kolor ramki podczas fokusa
                    borderWidth: '3px',
                  },
                  '& input': {
                    color: 'black', // Kolor tekstu wewnątrz pola
                    backgroundColor: 'white', // Kolor tła wewnątrz pola
                  },
                  '& input::placeholder': {
                    color: 'black', // Kolor tekstu placeholdera
                  },
                  // Stylizacja dla autofill
                  '& input:-webkit-autofill': {
                    backgroundColor: 'white !important', // Kolor tła po automatycznym wypełnieniu
                    WebkitBoxShadow: '0 0 0 100px white inset', // Zapewnia, że tło pozostaje białe
                    WebkitTextFillColor: 'black !important', // Kolor tekstu po automatycznym wypełnieniu
                  },
                  // Dodatkowe pseudo-stany dla autofill
                  '& input:-webkit-autofill:hover': {
                    backgroundColor: 'white !important', // Kolor tła po automatycznym wypełnieniu przy najechaniu
                  },
                  '& input:-webkit-autofill:focus': {
                    backgroundColor: 'white !important', // Kolor tła po automatycznym wypełnieniu przy fokusu
                  },
                  '& input:-webkit-autofill:active': {
                    backgroundColor: 'white !important', // Kolor tła po automatycznym wypełnieniu przy aktywacji
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'black', // Kolor etykiety w normalnym stanie
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#93F600', // Kolor etykiety podczas fokusa
                  fontSize: '20px',
                  transform: 'translate(14px, -12px) scale(0.75)', // Transformacja etykiety w stanie focus
                  backgroundColor: 'white', // Kolor tła etykiety w stanie focus
                  padding: '0 4px',
                },
              }}
            />
          </div>
        </FormControl>
        <Stack>
          <Button
            type="submit"
            variant="outlined"
            color="success"
            size="large"
            sx={{
              mb: 2,
              background: "rgb(28, 132, 250, 0.8)",
              color: "#ffffff", // Kolor tekstu
              padding: '14px 0px',
              '&:hover': {
                backgroundColor: "#93F600", // Kolor tła po najechaniu
                borderColor: '#93F600',
              },
            }}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Wrapper>
  );
};