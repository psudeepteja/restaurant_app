import * as Yup from 'yup';

export const formValidationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
  })