import { Form } from '../Form';
import type { VehicleData } from '../../types';
import { Modal, Box } from '@mui/material';
import React from 'react';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface EditModalProps {
  isOpen: boolean;
  vehicle?: VehicleData;
  handleClose: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({ isOpen, handleClose, vehicle }) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form data={vehicle} />
        </Box>
      </Modal>
    </div>
  );
};
