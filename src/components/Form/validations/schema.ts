import * as Yup from 'yup';

export const vehicleValidationSchema = Yup.object().shape({
  licensePlate: Yup.string()
    .required('Placa é um campo obrigatório.')
    .matches(
      /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/,
      'Placa inválida, tente sem hífen, como: MZW4550, MYF8104, IAO4372, ADC9313',
    ),
  vehicleModel: Yup.string().required('Modelo é um campo obrigatório.'),
  tankCapacity: Yup.number()
    .required('Capacidade do tanque é um campo obrigatório.')
    .min(10, 'Capacidade do tanque deve ser maior que 10.'),
  maxLoad: Yup.number()
    .required('Carga máxima é obrigatório.')
    .min(0.1, 'Carga máxima deve ser maior que 0 toneladas.')
    .max(50, 'Carga máxima não pode exceder 50 toneladas'),

  averageConsumption: Yup.number()
    .required('Consumo médio é obrigatório.')
    .min(0.01, 'Consumo médio deve ser um número maior que 0.'),
  distanceTravelled: Yup.number()
    .required('Distância é um campo obrigatório.')
    .min(100, 'Distância deve ser maior que 100km.'),
});
