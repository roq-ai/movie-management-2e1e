import axios from 'axios';
import queryString from 'query-string';
import { DirectorInterface, DirectorGetQueryInterface } from 'interfaces/director';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDirectors = async (
  query?: DirectorGetQueryInterface,
): Promise<PaginatedInterface<DirectorInterface>> => {
  const response = await axios.get('/api/directors', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDirector = async (director: DirectorInterface) => {
  const response = await axios.post('/api/directors', director);
  return response.data;
};

export const updateDirectorById = async (id: string, director: DirectorInterface) => {
  const response = await axios.put(`/api/directors/${id}`, director);
  return response.data;
};

export const getDirectorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/directors/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDirectorById = async (id: string) => {
  const response = await axios.delete(`/api/directors/${id}`);
  return response.data;
};
