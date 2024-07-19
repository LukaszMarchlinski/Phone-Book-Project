import { useDispatch } from 'react-redux';

import { removeContact } from 'redux/contacts/operations';
import { TableData } from './ContactListItem.Styled';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';

export const ContactListItem = ({
  name,
  number,
  id,
  toggleEditModal,
  getContactInfo,
}) => {
  const dispatch = useDispatch();

  const onDeleteClick = () => dispatch(removeContact(id));

  const handleChangeInfo = () => {
    const contactInfo = { name, number, id };
    toggleEditModal();
    getContactInfo(contactInfo);
  };

  return (
    <tr>
      <td>
        <AccountCircleRoundedIcon 
          color="info"
          
          sx={{
            fontSize: 35,
            color: '#1c84fa'
          }}
        />
      </td>
      <TableData>{name}</TableData>
      <TableData className="center"
      >{number}</TableData>
      <TableData className="tools"
      >
        <IconButton
          id={id}
          type="button"
          size="small"
          onClick={handleChangeInfo}
          sx={{
            '&:focus': {
              backgroundColor: '#93F600', // Kolor tła w stanie focus
            },
            '&:hover': {
              backgroundColor: '#1c84fa', // Kolor tła po najechaniu
            },
          }}
          
        >
          <ModeEditIcon />
          </IconButton>
      </TableData>
      <TableData className="tools">
        <IconButton
          size="small"
          id={id}
          type="button"
          onClick={onDeleteClick}
          sx={{
            '&:focus': {
              backgroundColor: '#93F600', // Kolor tła w stanie focus
            },
            '&:hover': {
              backgroundColor: '#1c84fa', // Kolor tła po najechaniu
            },
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableData>
    </tr>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
