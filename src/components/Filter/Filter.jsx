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
      sx={{ mt: 1, minWidth: 500 }}
      style={{background: "rgb(255, 255, 255, 0.8)"}}
    />
  );
};
