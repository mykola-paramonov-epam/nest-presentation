import { Provider } from './provider';

export interface RepositoryBasic<C, U, M> extends Provider<C, U, M> {};
export interface Repository<D, M> extends RepositoryBasic<D, D, M> {};
