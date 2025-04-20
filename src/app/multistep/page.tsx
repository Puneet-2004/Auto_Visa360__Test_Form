// src/app/multistep/page.tsx
"use client";
import { useState } from 'react';
import Form from '@/components/Form';
import { FieldDefinition } from '@/types/form';

const formSteps: { fields: FieldDefinition[]; tableName: string }[] = [
  {
    tableName: 'personal_info',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
    ],
  },
  {
    tableName: 'contact_info',
    fields: [
      { name: 'phone', label: 'Phone Number', type: 'phone' },
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        options: ['Male', 'Female', 'Other'],
      },
    ],
  },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState<Record<string, any>>({});

  const handleNext = (data: Record<string, any>) => {
    const table = formSteps[currentStep].tableName;
    console.log(`🛠️ Push to ${table}`, data);

    // Simulate saving to SQL later
    setCollectedData((prev) => ({ ...prev, [table]: data }));

    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('✅ All steps complete!', collectedData);
    }
  };

  const step = formSteps[currentStep];

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Step {currentStep + 1}</h1>
      <Form fields={step.fields} tableName={step.tableName} onNext={handleNext} />
    </div>
  );
}
