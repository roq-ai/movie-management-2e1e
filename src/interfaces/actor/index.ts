import { MovieInterface } from 'interfaces/movie';
import { GetQueryInterface } from 'interfaces';

export interface ActorInterface {
  id?: string;
  name: string;
  birth_date?: any;
  nationality?: string;
  gender?: string;
  movie_id: string;
  created_at?: any;
  updated_at?: any;

  movie?: MovieInterface;
  _count?: {};
}

export interface ActorGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  nationality?: string;
  gender?: string;
  movie_id?: string;
}
