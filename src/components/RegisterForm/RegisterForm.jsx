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

    console.log('Submitting form with credentials:', credentials);

    dispatch(userRegister(credentials))
      .then(response => {
        console.log('Registration successful:', response);
        resetForm();
      })
      .catch(error => {
        console.error('Registration error:', error);
      });
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
              label="User name"
              variant="outlined"
              color="info"
              id="outlined-basic"
              sx={{
                mb: 1,
                '& .MuiInputBase-input': {
                  color: 'black',
                },
                '& .MuiInputLabel-root': {
                  color: 'black',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#93F600',
                  fontSize: '20px',
                  transform: 'translate(14px, -12px) scale(0.75)',
                  backgroundColor: 'white',
                  padding: '0 4px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1c84fa',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1c84fa',
                  },
                  '&:active fieldset': {
                    borderColor: '#1c84fa',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#54b95f',
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
                  backgroundColor: 'white',
                  '& fieldset': {
                    borderColor: '#54b95f',
                    borderWidth: '3px',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1c84fa',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1c84fa',
                    borderWidth: '3px',
                  },
                  '& input': {
                    color: 'black',
                    backgroundColor: 'white',
                  },
                  '& input::placeholder': {
                    color: 'black',
                  },
                  '& input:-webkit-autofill': {
                    backgroundColor: 'white !important',
                    WebkitBoxShadow: '0 0 0 100px white inset',
                    WebkitTextFillColor: 'black !important',
                  },
                  '& input:-webkit-autofill:hover': {
                    backgroundColor: 'white !important',
                  },
                  '& input:-webkit-autofill:focus': {
                    backgroundColor: 'white !important',
                  },
                  '& input:-webkit-autofill:active': {
                    backgroundColor: 'white !important',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'black',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#93F600',
                  fontSize: '20px',
                  transform: 'translate(14px, -12px) scale(0.75)',
                  backgroundColor: 'white',
                  padding: '0 4px',
                },
              }}
              onChange={handleChange}
              value={email}
              required
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
                  backgroundColor: 'white',
                  '& fieldset': {
                    borderColor: '#54b95f',
                    borderWidth: '3px',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1c84fa',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1c84fa',
                    borderWidth: '3px',
                  },
                  '& input': {
                    color: 'black',
                    backgroundColor: 'white',
                  },
                  '& input::placeholder': {
                    color: 'black',
                  },
                  '& input:-webkit-autofill': {
                    backgroundColor: 'white !important',
                    WebkitBoxShadow: '0 0 0 100px white inset',
                    WebkitTextFillColor: 'black !important',
                  },
                  '& input:-webkit-autofill:hover': {
                    backgroundColor: 'white !important',
                  },
                  '& input:-webkit-autofill:focus': {
                    backgroundColor: 'white !important',
                  },
                  '& input:-webkit-autofill:active': {
                    backgroundColor: 'white !important',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'black',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#93F600',
                  fontSize: '20px',
                  transform: 'translate(14px, -12px) scale(0.75)',
                  backgroundColor: 'white',
                  padding: '0 4px',
                },
              }}
              onChange={handleChange}
              value={password}
              required
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
              color: "#ffffff",
              padding: '14px 0px',
              '&:hover': {
                backgroundColor: "#93F600",
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