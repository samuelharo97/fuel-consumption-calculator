import { useFormik } from 'formik';
import { FlexDiv, FormContainer, SubmitButton } from './styles';
import { Autocomplete, TextField } from '@mui/material';
import { TruckBrands } from '../../utils/trucks';

interface VehicleFormValues {
  licensePlate: string;
  vehicleModel: string;
  tankCapacity: number;
  maxLoad: number;
  averageConsumption: number;
  distanceTravelled: number;
}

const initialValues: VehicleFormValues = {
  licensePlate: '',
  vehicleModel: '',
  tankCapacity: 0,
  maxLoad: 0,
  averageConsumption: 0,
  distanceTravelled: 0
};

export const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values);
      // Calculate average fuel consumption per ton transported
      // and add the calculation result to the history list.
    },
    validate: values => {
      const errors: Partial<VehicleFormValues> = {};
      if (!values.licensePlate) {
        errors.licensePlate = 'License Plate is required';
      }
      if (!values.vehicleModel) {
        errors.vehicleModel = 'Model is required';
      }
      if (values.tankCapacity <= 0) {
        errors.tankCapacity =
          'Tank Capacity must be greater than 0' as unknown as number;
      }
      if (values.maxLoad <= 0) {
        errors.maxLoad = 'Max Load must be greater than 0' as unknown as number;
      }
      if (values.averageConsumption <= 0) {
        errors.averageConsumption =
          'Average Consumption must be greater than 0' as unknown as number;
      }
      if (values.distanceTravelled <= 0) {
        errors.distanceTravelled =
          'Distance Traveled must be greater than 0' as unknown as number;
      }
      return errors;
    }
  });

  const resetForm = () => {
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
        error={Boolean(
          formik.touched.licensePlate && formik.errors.licensePlate
        )}
        helperText={formik.touched.licensePlate && formik.errors.licensePlate}
      />
      <Autocomplete
        id="vehicleModel"
        options={TruckBrands}
        freeSolo={true}
        getOptionLabel={option => option}
        value={formik.values.vehicleModel}
        onChange={(event, value) =>
          formik.setFieldValue('vehicleModel', value || '')
        }
        renderInput={params => (
          <TextField
            {...params}
            label="Modelo"
            error={Boolean(
              formik.touched.vehicleModel && formik.errors.vehicleModel
            )}
            helperText={
              formik.touched.vehicleModel && formik.errors.vehicleModel
            }
          />
        )}
      />

      <TextField
        id="tankCapacity"
        label="Capacidade do Tanque"
        variant="outlined"
        {...formik.getFieldProps('tankCapacity')}
        error={Boolean(
          formik.touched.tankCapacity && formik.errors.tankCapacity
        )}
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
        error={Boolean(
          formik.touched.averageConsumption && formik.errors.averageConsumption
        )}
        helperText={
          formik.touched.averageConsumption && formik.errors.averageConsumption
        }
      />
      <TextField
        id="distanceTravelled"
        label="Distância percorrida"
        variant="outlined"
        {...formik.getFieldProps('distanceTravelled')}
        error={Boolean(
          formik.touched.distanceTravelled && formik.errors.distanceTravelled
        )}
        helperText={
          formik.touched.distanceTravelled && formik.errors.distanceTravelled
        }
      />

      <FlexDiv>
        <SubmitButton
          variant="contained"
          onClick={() => resetForm()}
          color="warning"
          type="button"
        >
          Limpar
        </SubmitButton>
        <SubmitButton variant="contained" color="primary" type="submit">
          Calcular
        </SubmitButton>
      </FlexDiv>
    </FormContainer>
  );
};
