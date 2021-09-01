import React, {useState} from 'react';
import ModalContainer from './ModalContainer';
import Button from 'react-bootstrap/Button';

const ModalButton = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <ModalContainer
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default ModalButton;