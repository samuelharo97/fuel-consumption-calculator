import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from '@mui/material';
import { VehicleData } from '~/types';
import { DetailsContainer, DetailRow } from './styles';

interface DialogProps {
  handleClose: () => void;
  isOpen: boolean;
  vehicle: VehicleData | undefined;
}

export const VehicleDetailsDialog: React.FC<DialogProps> = ({ isOpen, handleClose, vehicle }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
        Detalhes
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: 'background.paper' }}>
        <DetailsContainer>
          <Typography sx={{ width: '400px' }} variant="h6">
            {vehicle?.vehicleModel}
          </Typography>
          <DetailRow>
            <Typography>Placa:</Typography>
            <Typography>{vehicle?.licensePlate}</Typography>
          </DetailRow>
          <DetailRow>
            <Typography>Capacidade do tanque:</Typography>
            <Typography>{vehicle?.tankCapacity} litros</Typography>
          </DetailRow>
          <DetailRow>
            <Typography>Carga máxima:</Typography>
            <Typography>{vehicle?.maxLoad} ton</Typography>
          </DetailRow>
          <DetailRow>
            <Typography>Consumo médio:</Typography>
            <Typography>{vehicle?.averageConsumption} L/100km</Typography>
          </DetailRow>
          <DetailRow>
            <Typography>Distância percorrida:</Typography>
            <Typography>{vehicle?.distanceTravelled} km</Typography>
          </DetailRow>
          <DetailRow>
            <Typography>Consumo total:</Typography>
            <Typography>{vehicle?.totalConsumption} L/t-km</Typography>
          </DetailRow>
        </DetailsContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};
