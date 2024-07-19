import { useDispatch } from 'react-redux';

import { updateFilterValue } from 'redux/contacts/slice';

import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = ({ currentTarget: { value } }) => {
    dispatch(updateFilterValue(value.toLocaleLowerCase()));
  };

  return (
    <TextField
      onChange={filterHandler}
      id="outlined-basic"
      label="Search by name"
      variant="outlined"
      color="info"
      sx={{
        mt: 1,
        minWidth: 500,
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
          borderColor: '#54b95f',// Kolor obramowania
          borderWidth: '3px',
        },
      
        },
      }}
      />
  );
};
