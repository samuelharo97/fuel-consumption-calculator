import { useContext } from 'react';
import { VehicleTable } from '../../components';
import { saveToLocalStorage } from '../../utils/local-storage';
import { VehicleContext } from '../../context/VehicleContext';

// const vehicles = [
//   {
//     id: 'asdfjnuio',
//     licensePlate: 'ABC123',
//     vehicleModel: 'Honda Civic',
//     tankCapacity: 50,
//     maxLoad: 1000,
//     averageConsumption: 10,
//     distanceTravelled: 500,
//     totalConsumption: 50,
//   },
//   {
//     id: '23rpdś',
//     licensePlate: 'DEF456',
//     vehicleModel: 'Toyota Corolla',
//     tankCapacity: 40,
//     maxLoad: 800,
//     averageConsumption: 8,
//     distanceTravelled: 400,
//     totalConsumption: 32,
//   },
// ];

export const Table = (): any => {
  const { setVehicles, vehicles } = useContext(VehicleContext);

  const deleteVehicle = (id: string): void => {
    console.log(id);
    const filteredVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    saveToLocalStorage('@Trucks', filteredVehicles);
    setVehicles(filteredVehicles);
  };
  return <VehicleTable handleDeleteTruck={deleteVehicle} data={vehicles} />;
};
