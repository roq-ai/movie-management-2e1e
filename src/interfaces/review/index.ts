import { UserInterface } from 'interfaces/user';
import { MovieInterface } from 'interfaces/movie';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  content: string;
  rating?: number;
  user_id: string;
  movie_id: string;
  review_date?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  movie?: MovieInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  movie_id?: string;
}
