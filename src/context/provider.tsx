import React, { useReducer } from 'react';
import AppReducer from './reducer';
import { InitialContextState, ContextState } from '../types';

const initialState: InitialContextState = {
  dataUrl: '/data/git.json',
  optionGroup: []
};

export const Context = React.createContext<ContextState | null>(null);

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    ...initialState,
    updateDataUrl: (dataUrl: string) => {
      dispatch({ type: 'update:url', dataUrl });
    },
    resetOptions: () => {
      dispatch({ type: 'reset:options' });
    },
    addOptions: options => {
      dispatch({ type: 'add:option-group', optionGroup: options });
    },
    sliceOptions: idx => {
      dispatch({ type: 'slice:options', idx });
    },
    addUsageAndNotes: (usage, note) => {
      dispatch({ type: 'add:usage-notes', usage, note });
    }
  });

  return <Context.Provider value={state}>{children}</Context.Provider>;
};
