import { MovieInterface } from 'interfaces/movie';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  established_on?: any;
  industry?: string;
  location?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  movie?: MovieInterface[];
  user?: UserInterface;
  _count?: {
    movie?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  industry?: string;
  location?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
