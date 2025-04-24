'use client';

import { useState } from 'react';
import Form from '@/components/Form';
import { FieldDefinition } from '@/types/form';

const formSteps: { fields: FieldDefinition[]; tableName: string }[] = [
  {
    tableName: 'personal1',
    fields: [
      { name: 'surnames', label: 'Surnames', type: 'text' },
      { name: 'givenNames', label: 'Given Names', type: 'text' },
      {
        name: 'fullNameNative',
        label: 'Full Name in Native Alphabet (check if not applicable)',
        type: 'text',
        options: ['not_applicable'], 
      },
      { name: 'dob', label: 'Date of Birth (YYYY-MM-DD)', type: 'date' },
      {
        name: 'birthCity',
        label: 'City of Birth',
        type: 'text',
      },
      {
        name: 'birthState',
        label: 'State/Province of Birth',
        type: 'text',
        options: ['not_applicable'], // For the checkbox logic
      },
      {
        name: 'birthCountry',
        label: 'Country/Region of Birth',
        type: 'select',
        options: ['- SELECT ONE -', 'India', 'United States', 'Canada', 'Australia', 'Germany', 'France', 'Other'], // Add more if needed
      },      
      { name: 'otherNameUsed', label: 'Have you used any other name?', type: 'radio', options: ['Yes', 'No'] },
      { name: 'hasTelecode', label: 'Do you have a telecode that represents your name?', type: 'radio', options: ['Yes', 'No'] },
      { name: 'sex', label: 'Sex', type: 'radio', options: ['Male', 'Female'] },
      { name: 'maritalStatus', label: 'Marital Status', type: 'radio', options: ['Single', 'Married', 'Divorced', 'Widowed'] },
    ],
  },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState<Record<string, any>>({});
  const [formKey, setFormKey] = useState(Date.now()); 

  const handleNext = (data: Record<string, any>) => {
    const table = formSteps[currentStep].tableName;
    console.log(`🛠️ Push to ${table}`, data);

    setCollectedData((prev) => ({ ...prev, [table]: data }));

    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setFormKey(Date.now()); // Reset form
    } else {
      console.log('✅ All steps complete!', { ...collectedData, [table]: data });
    }
  };

  const step = formSteps[currentStep];

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Step {currentStep + 1}</h1>
      <Form
        key={formKey} 
        fields={step.fields}
        tableName={step.tableName}
        onNext={handleNext}
      />
    </div>
  );
}
