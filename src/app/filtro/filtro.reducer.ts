import { createReducer, on, Action } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';


export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(initialState,
    on(setFiltro,(state, {filtro})=>filtro) 
);

export function filtroReducer(state: any, action: Action) {
  return _filtroReducer(state, action);
}