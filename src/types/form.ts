// src/types/form.ts

export type FieldType = 'text' | 'email' | 'number' | 'phone' | 'radio' | 'select' | 'date';


export interface FieldDefinition {
  name: string;
  label: string;
  type: FieldType;
  options?: string[]; // Only used for radio/select types
}
