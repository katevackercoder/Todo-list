        // src/todoSlice.ts
        import { createSlice, PayloadAction } from '@reduxjs/toolkit';

        interface Todo {
          id: number;
          text: string;
          completed: boolean; // Added "completed" property to the Todo interface
        }

        const todoSlice = createSlice({
          name: 'todos',
          initialState: [] as Todo[],
          reducers: {
            addTodo: (state, action: PayloadAction<Todo>) => {
              state.push(action.payload);
            },
            removeTodo: (state, action: PayloadAction<number>) => {
              return state.filter((todo) => todo.id !== action.payload);
            },
            toggleComplete: (state, action: PayloadAction<number>) => {
              const updatedTodos = state.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
              );
              return updatedTodos;
            },
          },
        });

        export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions; // Added "toggleComplete" action
        export default todoSlice.reducer;