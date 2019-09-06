/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { LogFormsModal as Modal } from 'src/styles/materialUi/materialUiStyles/LogForms';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from './ModalFade';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LogFormsModal = ({ open, handleClose, view }) => (
  <div>
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        {view === 'Sign in' && <SignIn />}
        {view === 'Sign up' && <SignUp />}
      </Fade>
    </Modal>
  </div>
);


LogFormsModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  view: PropTypes.string,
};

LogFormsModal.defaultProps = {
  open: false,
  handleClose: () => { },
  view: '',
};

export default LogFormsModal;