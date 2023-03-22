import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { TableHeaderCell } from './styles';
import React, { useContext, useState } from 'react';
import { AlertDialog, EditModal, VehicleRow } from '~/components';
import { VehicleData } from '~/types';
import { VehicleContext } from '~/context';
import { useVehicle } from '~/hooks';

interface TableProps {
  data: VehicleData[];
}

export const VehicleTable: React.FC<TableProps> = ({ data }) => {
  const { vehicles } = useContext(VehicleContext);
  const { deleteVehicle } = useVehicle();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [clickedVehicle, setClickedVehicle] = useState<VehicleData>();

  const handleOpen = (id: string, argument: string): void => {
    const clickedTruck = vehicles.find((vehicle) => vehicle.id === id);

    if (clickedTruck == null) {
      throw new Error('Truck not found');
    }

    setClickedVehicle(clickedTruck);

    if (argument === 'delete') {
      setOpenDelete(true);
    } else {
      setOpenEdit(true);
    }
  };

  const handleClose = (): void => {
    setOpenEdit(false);
    setOpenDelete(false);
  };

  return (
    <>
      <EditModal vehicle={clickedVehicle} handleClose={handleClose} isOpen={openEdit}></EditModal>
      <AlertDialog
        title="Cuidado."
        message="Deseja realmente remover este item?"
        isOpen={openDelete}
        handleAccept={() => {
          if (clickedVehicle?.id) {
            deleteVehicle(clickedVehicle.id);
            handleClose();
          }
        }}
        handleClose={handleClose}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Placa</TableHeaderCell>
              <TableHeaderCell>Modelo</TableHeaderCell>
              <TableHeaderCell>Capacidade do tanque</TableHeaderCell>
              <TableHeaderCell>Carga máxima</TableHeaderCell>
              <TableHeaderCell>Consumo médio</TableHeaderCell>
              <TableHeaderCell>Distância percorrida</TableHeaderCell>
              <TableHeaderCell>Consumo total</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((vehicle) => (
              <VehicleRow
                key={vehicle.id}
                handleOpen={() => handleOpen(vehicle.id, 'edit')}
                handleDelete={() => handleOpen(vehicle.id, 'delete')}
                vehicle={vehicle}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
