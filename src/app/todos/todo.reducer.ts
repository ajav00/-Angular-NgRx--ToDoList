import { Action, createReducer, on, State } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, clearCompleted } from './todo.actions';

export const estadoInicial: Todo[] = [ 
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Iron Man'),
];
 
const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]), 
  on(toggle, (state, {id}) => {
    return state.map( todo =>{
      if(todo.id === id){
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      else{
        return todo;
      }
    });
  }), 
  on(editar, (state, {id, texto}) => {
    return state.map( todo =>{
      if(todo.id === id){
        return {
          ...todo,
          texto: texto
        }
      }
      else{
        return todo;
      }
    });
  }), 
  on(borrar, (state, {id}) => {
    return state.filter( todo => todo.id !== id);
  }), 
  on(toggleAll, (state, {completado}) => {
    return state.map( todo => {
      return{
        ...todo,
        completado: completado
      }
    });
  }),
  on(clearCompleted, (state) => {
    return state.filter( (todos) => !todos.completado );
  }),

);
 
export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}