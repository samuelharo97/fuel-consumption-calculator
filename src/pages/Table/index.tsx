import { useContext } from 'react';
import { VehicleTable } from '../../components';
import { saveToLocalStorage } from '../../utils/local-storage';
import { VehicleContext } from '../../context/VehicleContext';

export const Table = (): any => {
  const { setVehicles, vehicles } = useContext(VehicleContext);

  const deleteVehicle = (id: string): void => {
    const filteredVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    saveToLocalStorage('@Trucks', filteredVehicles);
    setVehicles(filteredVehicles);
  };
  return <VehicleTable handleDeleteTruck={deleteVehicle} data={vehicles} />;
};
