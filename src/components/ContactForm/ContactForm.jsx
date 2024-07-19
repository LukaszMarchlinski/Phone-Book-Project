import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { Notify } from 'notiflix';
import { HeadTitle } from 'components/UI/HeadTitle/HeadTitle';
import { Wrapper } from './ContactForm.Styled';

export const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        // Usuwamy wszystkie znaki inne niż cyfry i spację po prefiksie
        let sanitizedValue = value.replace(/[^\d\s]/g, '');

        // Sprawdzamy, czy prefiks +48 jest obecny
        if (!sanitizedValue.startsWith('48 ')) {
          sanitizedValue = '48 ' + sanitizedValue.replace(/^48/, '');
        }

        setNumber('+' + sanitizedValue);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    // Usuwamy prefiks +48 i spację, aby sprawdzić długość numeru
    const numberWithoutPrefix = number.replace('+48 ', '');

    if (numberWithoutPrefix.length < 9) {
      return Notify.warning('Phone number must be at least 9 digits long.');
    }

    for (const contactItem of contacts) {
      const normalizeStateName = contactItem.name.toLowerCase();
      const normalizeFormName = name.toLowerCase();

      if (normalizeStateName === normalizeFormName) {
        return Notify.warning(`${contactItem.name}, is already in contacts!'`);
      }
    }

    dispatch(addContact({ name, number }));

    resetForm();
  };

  return (
    <Wrapper>
      <HeadTitle title={'Create new contact'} />

      <Box component="form" onSubmit={handleFormSubmit}>
        <FormControl sx={{ width: '25ch', mt: 1 }}>
          <TextField
            onChange={handleChange}
            label="Name"
            variant="outlined"
            color="info"
            id="outlined-basic"
            sx={{
              mb: 2,
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
              },
            }}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            value={name}
            autoComplete="off"
            required
            style={{ background: "rgb(255, 255, 255, 0.8)" }}
          />

          <TextField
            name="number"
            type="tel"
            onChange={handleChange}
            value={number}
            label="Number"
            variant="outlined"
            color="info"
            pattern="\+48 \d{9}"
            title="Phone number must start with +48 and be followed by 9 digits"
            id="outlined-basic"
            sx={{
              mb: 1,
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
            inputProps={{ maxLength: 13 }} // +48 + spacja + 9 cyfr
            autoComplete="off"
            required
            style={{ background: "rgb(255, 255, 255, 0.8)" }}
          />
        </FormControl>
        <Stack>
        <Button
  type="submit"
  variant="outlined"
  color="info"
  size="large"
  endIcon={<PersonAddAlt1OutlinedIcon size="medium" />}
  sx={{
    background: "rgb(28, 132, 250, 0.8)",
    color: "#ffffff", // Kolor tekstu
    padding: '14px 0px',
    '&:hover': {
      backgroundColor: "#93F600", // Kolor tła po najechaniu
      borderColor: '#93F600',
    },
  }}
>
  Add contact
</Button>
        </Stack>
      </Box>
    </Wrapper>
  );
};