/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { LogFormsModal as Modal } from 'src/styles/materialUi/materialUiStyles/LogForms';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const LogFormsModal = ({
  open,
  handleClose,
  formName,
  handleOpen,
  handleUserAuthInfos,
  handleAuthInput,
}) => (
  <div>
    {formName === 'in' && (
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <SignIn
          handleOpen={handleOpen}
          handleUserAuthInfos={handleUserAuthInfos}
          handleAuthInput={handleAuthInput}
        />
      </Modal>
    )}

    {formName === 'up' && (
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <SignUp
          handleOpen={handleOpen}
          handleUserAuthInfos={handleUserAuthInfos}
          handleAuthInput={handleAuthInput}
        />
      </Modal>
    )}

    {formName === 'password' && (
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <ForgotPassword
          handleOpen={handleOpen}
          handleUserAuthInfos={handleUserAuthInfos}
          handleAuthInput={handleAuthInput}
        />
      </Modal>
    )}
  </div>
);


LogFormsModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
  handleAuthInput: PropTypes.func,
  formName: PropTypes.string,
};

LogFormsModal.defaultProps = {
  open: false,
  handleClose: () => {},
  handleOpen: () => {},
  handleAuthInput: () => {},
  formName: '',
};

export default LogFormsModal;
