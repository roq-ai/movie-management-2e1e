import * as yup from 'yup';

export const movieValidationSchema = yup.object().shape({
  title: yup.string().required(),
  movie_director: yup.string().nullable(),
  release_date: yup.date().nullable(),
  genre: yup.string().nullable(),
  rating: yup.number().integer().nullable(),
  company_id: yup.string().nullable().required(),
});
