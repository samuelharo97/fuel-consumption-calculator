import * as Yup from 'yup';

export const vehicleValidationSchema = Yup.object().shape({
  licensePlate: Yup.string()
    .required('Placa é um campo obrigatório.')
    .matches(
      /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/,
      'Placa inválida, tente sem hífen, como: MZW4550, MYF8104, IAO4372, ADC9313',
    )
    .min(7, 'Placa inválida, tente sem hífen, como: MZW4550, MYF8104, IAO4372, ADC9313')
    .max(7, 'Placa inválida, tente sem hífen, como: MZW4550, MYF8104, IAO4372, ADC9313'),
  vehicleModel: Yup.string().required('Modelo é um campo obrigatório.'),
  tankCapacity: Yup.number()
    .typeError('Campo aceita apenas números')
    .required('Capacidade do tanque é um campo obrigatório.')
    .min(10, 'Capacidade do tanque deve ser maior que 10.'),
  maxLoad: Yup.number()
    .typeError('Campo aceita apenas números')
    .required('Carga máxima é obrigatório.')
    .min(0.1, 'Carga máxima deve ser maior que 0 toneladas.')
    .max(200, 'Carga máxima não pode exceder 200 toneladas'),

  averageConsumption: Yup.number()
    .typeError('Campo aceita apenas números')
    .required('Consumo médio é obrigatório.')
    .min(0.01, 'Consumo médio deve ser um número maior que 0.'),
  distanceTravelled: Yup.number()
    .typeError('Campo aceita apenas números')
    .required('Distância é um campo obrigatório.')
    .min(100, 'Distância deve ser maior que 100km.'),
});
