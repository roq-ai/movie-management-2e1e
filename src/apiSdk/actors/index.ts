import axios from 'axios';
import queryString from 'query-string';
import { ActorInterface, ActorGetQueryInterface } from 'interfaces/actor';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getActors = async (query?: ActorGetQueryInterface): Promise<PaginatedInterface<ActorInterface>> => {
  const response = await axios.get('/api/actors', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createActor = async (actor: ActorInterface) => {
  const response = await axios.post('/api/actors', actor);
  return response.data;
};

export const updateActorById = async (id: string, actor: ActorInterface) => {
  const response = await axios.put(`/api/actors/${id}`, actor);
  return response.data;
};

export const getActorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/actors/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteActorById = async (id: string) => {
  const response = await axios.delete(`/api/actors/${id}`);
  return response.data;
};
