import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateContact } from 'redux/contacts/operations';

import CloseIcon from '@mui/icons-material/Close';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

import {
  Backdrop,
  Modal,
  CloseBtn,
  Input,
  Form,
  SubmitBtn,
} from 'components/EditModal/EditModal.Styled';

import { HeadTitle } from 'components/UI/HeadTitle/HeadTitle';
import { Notify } from 'notiflix';
import { notifySettings } from 'utils/const';

export const EditModal = ({ contactInfo, toggleEditModal }) => {
  const [name, setName] = useState(contactInfo.name);
  const [number, setNumber] = useState(contactInfo.number.startsWith('+48 ') ? contactInfo.number : '+48 ' + contactInfo.number);

  const dispatch = useDispatch();

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleEditModal();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === contactInfo.name && number === contactInfo.number) {
      Notify.info('Edit name or number', notifySettings);
      return;
    }

    dispatch(updateContact({ id: contactInfo.id, name, number }));

    toggleEditModal();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        // Ensure the prefix is +48 and the value contains only digits
        if (!value.startsWith('+48 ')) {
          value = '+48 ' + value.replace(/^\+48\s*/, '');
        }
        const sanitizedValue = value.replace(/[^\d+ ]/g, '');
        if (sanitizedValue.length <= 13) { // +48 + 9 digits + space
          setNumber(sanitizedValue);
        }
        return;
      default:
        break;
    }
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <CloseBtn type="button" onClick={toggleEditModal}>
          <CloseIcon />
        </CloseBtn>

        <HeadTitle title="Change contact" mt={0} />

        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
          />

          <Input
            value={number}
            onChange={handleChange}
            name="number"
            type="tel"
            label="Number"
            pattern="\+48\s\d{9}"
            title="Phone number must start with +48 and be followed by 9 digits"
            maxLength="13" // +48 + 9 digits + space
            autoComplete="off"
            required
            
          />
          <SubmitBtn type="submit">
            <DownloadDoneIcon />
          </SubmitBtn>
        </Form>
      </Modal>
    </Backdrop>
  );
};