interface OptionBase {
  value: string;
  label: string;
}

export interface OptionWithUsage extends OptionBase {
  usage: string;
  note?: string;
}

export interface OptionWithList extends OptionBase {
  options: OptionList[];
}

export type OptionList = OptionWithList | OptionWithUsage;

export interface FetchResponse {
  id: string;
  options: OptionList[];
}

type OptionGroup = OptionList[];

export interface InitialContextState {
  dataUrl: string;
  optionGroup: OptionGroup[];
  usage?: string;
  note?: string;
}

export interface ContextState extends InitialContextState {
  updateDataUrl: (dataUrl: string) => void;
  resetOptions: () => void;
  addOptions: (options: OptionGroup) => void;
  sliceOptions: (idx: number) => void;
  addUsageAndNotes: (usage: string, note?: string) => void;
}

export type ContextAction =
  | { type: 'reset:options' }
  | { type: 'slice:options'; idx: number }
  | { type: 'update:url'; dataUrl: string }
  | { type: 'add:option-group'; optionGroup: OptionGroup }
  | { type: 'add:usage-notes'; usage: string; note?: string };
