namespace FormSpace {
  export type FormType = 'inline' | 'block';
  export type FormState = 'active' | 'disabled';

  export interface FromInfo {
    type: FormType,
    state: FormState,
  }
}