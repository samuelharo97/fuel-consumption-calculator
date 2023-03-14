import { useFormik } from 'formik';
import { FormContainer, FormField, StyledDiv, SubmitButton } from './styles';

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

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormField
        id="licensePlate"
        label="Placa"
        variant="outlined"
        {...formik.getFieldProps('licensePlate')}
        error={Boolean(
          formik.touched.licensePlate && formik.errors.licensePlate
        )}
        helperText={formik.touched.licensePlate && formik.errors.licensePlate}
      />
      <FormField
        id="vehicleModel"
        label="Modelo"
        variant="outlined"
        {...formik.getFieldProps('vehicleModel')}
        error={Boolean(
          formik.touched.vehicleModel && formik.errors.vehicleModel
        )}
        helperText={formik.touched.vehicleModel && formik.errors.vehicleModel}
      />
      <FormField
        id="tankCapacity"
        label="Capacidade do Tanque"
        variant="outlined"
        {...formik.getFieldProps('tankCapacity')}
        error={Boolean(
          formik.touched.tankCapacity && formik.errors.tankCapacity
        )}
        helperText={formik.touched.tankCapacity && formik.errors.tankCapacity}
      />
      <FormField
        id="maxLoad"
        label="Carga máxima"
        variant="outlined"
        {...formik.getFieldProps('maxLoad')}
        error={Boolean(formik.touched.maxLoad && formik.errors.maxLoad)}
        helperText={formik.touched.maxLoad && formik.errors.maxLoad}
      />
      <FormField
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
      <FormField
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

      <SubmitButton variant="contained" color="primary" type="submit">
        Calcular
      </SubmitButton>
    </FormContainer>
  );
};
