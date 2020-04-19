import { Provider } from './provider';

export interface ServiceBasic<C, U, M> extends Provider<C, U, M> {};
export interface Service<D, M> extends ServiceBasic<D, D, M> {};
