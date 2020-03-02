import { ContextState, ContextAction } from '../types';

export default (state: ContextState, action: ContextAction): ContextState => {
  switch (action.type) {
    case 'update:url':
      return {
        ...state,
        dataUrl: action.dataUrl,
        optionGroup: [],
        usage: undefined,
        note: undefined
      };
    case 'reset:options':
      return { ...state, optionGroup: [] };
    case 'add:option-group':
      return {
        ...state,
        optionGroup: [...state.optionGroup, action.optionGroup]
      };
    case 'slice:options':
      return {
        ...state,
        optionGroup: state.optionGroup.slice(0, action.idx + 1)
      };
    case 'add:usage-notes':
      const { usage, note } = action;
      return {
        ...state,
        usage,
        note
      };
    default:
      return state;
  }
};
