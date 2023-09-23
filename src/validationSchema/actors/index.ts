import * as yup from 'yup';

export const actorValidationSchema = yup.object().shape({
  name: yup.string().required(),
  birth_date: yup.date().nullable(),
  nationality: yup.string().nullable(),
  gender: yup.string().nullable(),
  movie_id: yup.string().nullable().required(),
});
