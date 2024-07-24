export type CustomerType = 'residential' | 'commercial' | '';
export type ProjectType = 'sportField' | 'bocceBall' | 'golf' | 'lawn' | 'pets' | 'playArea' | 'deck' | 'patio' | 'other' | '';
export type TrafficType = 'low' | 'medium' | 'high' | '';

export interface FormData {
  customerType: CustomerType;
  project: ProjectType;
  projectSpecifics: string[];
  traffic: TrafficType;
  location: string;
  petsTrue: boolean;
  finishFormData: {
    fullName: string;
    email: string;
    phone: string;
    streetAddress: string;
    message: string;
  };
}

export interface StepProps {
  formData: FormData;
  updateFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}
