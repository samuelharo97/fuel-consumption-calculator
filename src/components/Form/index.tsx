import { TextField, Autocomplete, InputAdornment, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { FormContainer, SubmitButton, FlexDiv } from './styles';
import { useFormik } from 'formik';
import { VehicleData, VehicleFormValues } from '../../types';
import { TruckBrands } from '../../utils';
import { useVehicle } from '../../hooks/useVehicle';
import { vehicleValidationSchema } from './validations/schema';
import { InfoPopover } from '../InfoPopover';
import { VehicleDetailsDialog } from '../Dialogue';
import { VehicleContext } from '~/context/VehicleContext';

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
}

export const Form: React.FC<FormOptionalProps> = ({ data }) => {
  const { vehicles } = useContext(VehicleContext);

  const { handleEdit, createVehicle } = useVehicle();
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (data == null) {
        createVehicle(values);
      } else {
        handleEdit(values, data.id);
      }
      setOpen(true);
    },
    validationSchema: vehicleValidationSchema,
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
    <>
      <VehicleDetailsDialog
        vehicle={vehicles[vehicles.length - 1]}
        handleClose={() => setOpen(false)}
        isOpen={open}
      ></VehicleDetailsDialog>
      <Typography variant="h2" component="div">
        Cálculo de combustível.
      </Typography>

      <FormContainer onSubmit={formik.handleSubmit}>
        <Typography variant="subtitle1" component="div">
          Preencha os campos com atenção.
        </Typography>
        <TextField
          id="licensePlate"
          label="Placa"
          variant="outlined"
          InputProps={{
            startAdornment: data ? null : (
              <InfoPopover message="Digite o número da placa do seu veículo. Certifique-se de que está correto e atualizado para não ter problemas!" />
            ),
          }}
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
          onChange={async (_event, value) =>
            await formik.setFieldValue('vehicleModel', value ?? '')
          }
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
          InputProps={{
            startAdornment: data ? null : (
              <InfoPopover message="Quanto combustível pode conter o tanque do seu veículo?" />
            ),
            endAdornment: <InputAdornment position="start">litros</InputAdornment>,
          }}
          error={Boolean(formik.touched?.tankCapacity && formik.errors.tankCapacity)}
          helperText={formik.touched.tankCapacity && formik.errors.tankCapacity}
        />
        <TextField
          id="maxLoad"
          label="Carga máxima"
          variant="outlined"
          InputProps={{
            startAdornment: data ? null : (
              <InfoPopover message="Qual o peso máximo que seu veículo pode carregar?" />
            ),
            endAdornment: <InputAdornment position="start">toneladas</InputAdornment>,
          }}
          {...formik.getFieldProps('maxLoad')}
          error={Boolean(formik.touched.maxLoad && formik.errors.maxLoad)}
          helperText={formik.touched.maxLoad && formik.errors.maxLoad}
        />
        <TextField
          id="averageConsumption"
          label="Consumo médio"
          variant="outlined"
          InputProps={{
            startAdornment: data ? null : (
              <InfoPopover message="Quanto combustível seu veículo consome por 100 quilômetros em média? Esta informação irá ajudar-nos a estimar o custo do combustível para a sua viagem." />
            ),
            endAdornment: <InputAdornment position="start">litros/100km</InputAdornment>,
          }}
          {...formik.getFieldProps('averageConsumption')}
          error={Boolean(formik.touched.averageConsumption && formik.errors.averageConsumption)}
          helperText={formik.touched.averageConsumption && formik.errors.averageConsumption}
        />
        <TextField
          id="distanceTravelled"
          label="Distância percorrida"
          variant="outlined"
          InputProps={{
            startAdornment: data ? null : (
              <InfoPopover message="Quão longe você planeja viajar? Esta informação irá ajudar-nos a estimar o custo total de combustível da sua viagem." />
            ),

            endAdornment: <InputAdornment position="start">km</InputAdornment>,
          }}
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
    </>
  );
};
