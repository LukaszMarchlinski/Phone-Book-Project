import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/auth/operations';

import { Wrapper } from './RegisterForm.Styled';

import { HeadTitle } from 'components/UI/HeadTitle/HeadTitle';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';



export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const credentials = {
      name,
      email,
      password,
    };

    dispatch(userRegister(credentials));

    resetForm();
  };

  return (
    <Wrapper>
      <HeadTitle title={'Register page'} size={30} />
      <Box component="form" onSubmit={handleFormSubmit}>
        <FormControl sx={{ width: '25ch', mt: 1 }}>
          
          <div>
            <TextField
            onChange={handleChange}
            value={name}
            name="name"
            label=" User name"
            variant="outlined"
            color="info"
            id="outlined-basic"
            sx={{mb: 1,
              '& .MuiInputBase-input': {
                color: 'black', // Kolor tekstu wejściowego
              },
              '& .MuiInputLabel-root': {
                color: 'black', // Kolor etykiety
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#93F600', // Kolor etykiety w stanie focus
                fontSize: '20px', // Wielkość etykiety w stanie focus
                transform: 'translate(14px, -12px) scale(0.75)', // Transformacja etykiety w stanie focus
                backgroundColor: 'white', // Kolor tła etykiety w stanie focus
                padding: '0 4px',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#1c84fa', // Kolor obramowania domyślnego
                },
                '&:hover fieldset': {
                  borderColor: '#1c84fa', // Kolor obramowania podczas hover
                },
                '&:active fieldset': {
                  borderColor: '#1c84fa', // Kolor obramowania podczas hover
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#54b95f', // Kolor obramowania
                  borderWidth: '3px',
                },
                backgroundColor: 'ffffff',
              },
            }}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            autoComplete="off"
            required
            style={{ background: "rgb(255, 255, 255, 0.8)" }}
          />
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
            Register
          </Button>
        </Stack>
      </Box>
    </Wrapper>
  );
};
