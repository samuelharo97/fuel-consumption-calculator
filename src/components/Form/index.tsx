import { TextField, Autocomplete } from '@mui/material';
import { useEffect } from 'react';
import { FormContainer, SubmitButton, FlexDiv } from './styles';
import { useFormik } from 'formik';
import { VehicleData, VehicleFormValues } from '../../types';
import { TruckBrands } from '../../utils';
import { useVehicle } from '../../hooks/useVehicle';

const initialValues: VehicleFormValues = {
  licensePlate: '',
  vehicleModel: '',
  tankCapacity: 0,
  maxLoad: 0,
  averageConsumption: 0,
  distanceTravelled: 0,
};

interface FormOptionalProps {
  data?: VehicleData;
  handleEdit?: () => void;
}

export const Form: React.FC<FormOptionalProps> = ({ data }) => {
  const { handleEdit, createVehicle } = useVehicle();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (data == null) {
        createVehicle(values) 
      } else {
        handleEdit(values, data.id);
      }
    },

    validate: (values) => {
      const errors: Partial<VehicleFormValues> = {};
      if (!values.licensePlate) {
        errors.licensePlate = 'License Plate is required';
      }
      if (!values.vehicleModel) {
        errors.vehicleModel = 'Model is required';
      }
      if (values.tankCapacity <= 0) {
        errors.tankCapacity = 'Tank Capacity must be greater than 0' as unknown as number;
      }
      if (values.maxLoad <= 0) {
        errors.maxLoad = 'Max Load must be greater than 0' as unknown as number;
      }
      if (values.averageConsumption <= 0) {
        errors.averageConsumption =
          'Average Consumption must be greater than 0' as unknown as number;
      }
      if (values.distanceTravelled <= 0) {
        errors.distanceTravelled = 'Distance Traveled must be greater than 0' as unknown as number;
      }
      return errors;
    },
  });

  useEffect(() => {
    if (data != null) {
      formik.setFieldValue('averageConsumption', data.averageConsumption);
      formik.setFieldValue('distanceTravelled', data.distanceTravelled);
      formik.setFieldValue('licensePlate', data.licensePlate);
      formik.setFieldValue('maxLoad', data.maxLoad);
      formik.setFieldValue('tankCapacity', data.tankCapacity);
      formik.setFieldValue('vehicleModel', data.vehicleModel);
    }
  }, []);

  const resetForm = async (): Promise<void> => {
    formik.setFieldValue('averageConsumption', 0);
    formik.setFieldValue('distanceTravelled', 0);
    formik.setFieldValue('maxLoad', 0);
    formik.setFieldValue('tankCapacity', 0);
    formik.setFieldValue('licensePlate', '');
    formik.setFieldValue('vehicleModel', '');
  };

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <TextField
        id="licensePlate"
        label="Placa"
        variant="outlined"
        {...formik.getFieldProps('licensePlate')}
        error={Boolean(formik.touched.licensePlate && formik.errors.licensePlate)}
        helperText={formik.touched.licensePlate && formik.errors.licensePlate}
      />
      <Autocomplete
        id="vehicleModel"
        options={TruckBrands}
        freeSolo={true}
        getOptionLabel={(option) => option}
        value={formik.values.vehicleModel}
        onChange={async (_event, value) => await formik.setFieldValue('vehicleModel', value ?? '')}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Modelo"
            error={Boolean(formik.touched.vehicleModel && formik.errors.vehicleModel)}
            helperText={formik.touched.vehicleModel && formik.errors.vehicleModel}
          />
        )}
      />

      <TextField
        id="tankCapacity"
        label="Capacidade do Tanque"
        variant="outlined"
        {...formik.getFieldProps('tankCapacity')}
        error={Boolean(formik.touched?.tankCapacity && formik.errors.tankCapacity)}
        helperText={formik.touched.tankCapacity && formik.errors.tankCapacity}
      />
      <TextField
        id="maxLoad"
        label="Carga máxima"
        variant="outlined"
        {...formik.getFieldProps('maxLoad')}
        error={Boolean(formik.touched.maxLoad && formik.errors.maxLoad)}
        helperText={formik.touched.maxLoad && formik.errors.maxLoad}
      />
      <TextField
        id="averageConsumption"
        label="Consumo médio"
        variant="outlined"
        type="number"
        {...formik.getFieldProps('averageConsumption')}
        error={Boolean(formik.touched.averageConsumption && formik.errors.averageConsumption)}
        helperText={formik.touched.averageConsumption && formik.errors.averageConsumption}
      />
      <TextField
        id="distanceTravelled"
        label="Distância percorrida"
        variant="outlined"
        {...formik.getFieldProps('distanceTravelled')}
        error={Boolean(formik.touched.distanceTravelled && formik.errors.distanceTravelled)}
        helperText={formik.touched.distanceTravelled && formik.errors.distanceTravelled}
      />

      {data != null ? (
        <SubmitButton variant="contained" color="primary" type="submit">
          Salvar
        </SubmitButton>
      ) : (
        <FlexDiv>
          <SubmitButton
            variant="contained"
            onClick={() => {
              resetForm();
            }}
            color="warning"
            type="button"
          >
            Limpar
          </SubmitButton>
          <SubmitButton variant="contained" color="primary" type="submit">
            Calcular
          </SubmitButton>
        </FlexDiv>
      )}
    </FormContainer>
  );
};
