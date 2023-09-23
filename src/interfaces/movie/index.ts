import { ActorInterface } from 'interfaces/actor';
import { DirectorInterface } from 'interfaces/director';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface MovieInterface {
  id?: string;
  title: string;
  movie_director?: string;
  release_date?: any;
  genre?: string;
  company_id: string;
  rating?: number;
  created_at?: any;
  updated_at?: any;
  actor?: ActorInterface[];
  director?: DirectorInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    actor?: number;
    director?: number;
    review?: number;
  };
}

export interface MovieGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  movie_director?: string;
  genre?: string;
  company_id?: string;
}
