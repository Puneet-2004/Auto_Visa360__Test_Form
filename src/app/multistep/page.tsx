'use client';

import { useState } from 'react';
import Form from '@/components/Form';
import { FieldDefinition } from '@/types/form';

const formSteps: { fields: FieldDefinition[]; tableName: string }[] = [
  {
    tableName: 'personalinformation1',
    fields: [
      { name: 'surnames', label: 'Surnames', type: 'text' },
      { name: 'givenNames', label: 'Given Names', type: 'text' },
      {
        name: 'fullNameNative',
        label: 'Full Name in Native Alphabet (check if not applicable)',
        type: 'text',
        options: ['not_applicable'], 
      },
      { name: 'dob_D', label: 'Birth Day', type: 'select', options: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'] },
      { name: 'dob_M', label: 'Birth Month', type: 'select', options: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] },
      { name: 'dob_Y', label: 'Birth Year', type: 'text' },      
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
  {
    tableName: 'personalinformation2',
    fields: [
      {
        name: 'nationality',
        label: 'Country/Region of Origin (Nationality)',
        type: 'select',
        options: ['- SELECT ONE -', 'India', 'United States', 'Canada', 'Australia', 'Germany', 'France', 'Other'], // extend as needed
      },
      {
        name: 'otherNationalityHeld',
        label: 'Do you hold or have you held any nationality other than the one indicated above on nationality?',
        type: 'radio',
        options: ['Yes', 'No'],
      },
      {
        name: 'permanentResidentElsewhere',
        label: 'Are you a permanent resident of a country/region other than your country/region of origin (nationality) indicated above?',
        type: 'radio',
        options: ['Yes', 'No'],
      },
      {
        name: 'nationalId',
        label: 'National Identification Number',
        type: 'text',
        options: ['not_applicable'],
      },
      {
        name: 'socialSecurityNumber',
        label: 'U.S. Social Security Number',
        type: 'text',
        options: ['not_applicable'],
      },
      {
        name: 'taxpayerId',
        label: 'U.S. Taxpayer ID Number',
        type: 'text',
        options: ['not_applicable'],
      },
    ],
  },
  {
    tableName: 'travelInformation',
    fields: [
      {
        name: 'purposeOfTrip',
        label: 'Purpose of Trip to the U.S.',
        type: 'select',
        options: [
          'PLEASE SELECT A VISA CLASS',
          'FOREIGN GOVERNMENT OFFICIAL (A)',
          'TEMP. BUSINESS OR PLEASURE VISITOR (B)',
          'ALIEN IN TRANSIT (C)',
          'CNMI WORKER OR INVESTOR (CW/E2C)',
          'CREWMEMBER (D)',
          'TREATY TRADER OR INVESTOR (E)',
          'ACADEMIC OR LANGUAGE STUDENT (F)',
          'INTERNATIONAL ORGANIZATION REP./EMP. (G)',
          'TEMPORARY WORKER (H)',
          'FOREIGN MEDIA REPRESENTATIVE (I)',
          'EXCHANGE VISITOR (J)',
          'FIANCÉ(E) OR SPOUSE OF A U.S. CITIZEN (K)',
          'INTRACOMPANY TRANSFEREE (L)',
          'VOCATIONAL/NONACADEMIC STUDENT (M)',
          'OTHER (N)',
          'NATO STAFF (NATO)',
          'ALIEN WITH EXTRAORDINARY ABILITY (O)',
          'INTERNATIONALLY RECOGNIZED ALIEN (P)',
          'CULTURAL EXCHANGE VISITOR (Q)',
        ],
      },
      {
        name: 'madeSpecificPlans',
        label: 'Have you made specific travel plans?',
        type: 'radio',
        options: ['Yes', 'No'],
      },
  
      // ✈️ Fields if user selects "Yes"
      { name: 'arrivalDate', label: 'Date of Arrival in U.S.(if YES)', type: 'date' },
      { name: 'arrivalFlight', label: 'Arrival Flight (if known) and (if YES)', type: 'text' },
      { name: 'arrivalCity', label: 'Arrival City (if YES)', type: 'text' },
      { name: 'departureDate', label: 'Date of Departure from U.S. (if YES)', type: 'date' },
      { name: 'departureFlight', label: 'Departure Flight (if known) and (if YES)', type: 'text' },
      { name: 'departureCity', label: 'Departure City (if YES)', type: 'text' },
      { name: 'plannedLocations', label: 'Locations you plan to visit in the U.S. (if YES)', type: 'text' },
  
      // 📅 Fields if user selects "No"
      { name: 'intendedArrivalDate', label: 'Intended Date of Arrival', type: 'date' },
      {
        name: 'lengthOfStay',
        label: 'Intended Length of Stay in U.S.',
        type: 'select',
        options: ['- SELECT ONE -', '1 week', '2 weeks', '1 month', '3 months', '6 months', 'Other'],
      },
  
      {
        name: 'payerOfTrip',
        label: 'Person/Entity Paying for Your Trip',
        type: 'select',
        options: [
          '- SELECT ONE -',
          'SELF',
          'U.S. PETITIONER',
          'OTHER PERSON',
          'PRESENT EMPLOYER',
          'EMPLOYER IN THE U.S.',
          'OTHER COMPANY/ORGANIZATION',
        ],
      },
    ],
  },
  {
    tableName: 'travelCompanions',
    fields: [
      {
        name: 'hasTravelCompanions',
        label: 'Are there other persons traveling with you?',
        type: 'radio',
        options: ['Yes', 'No'],
      },
    ],
  },
  {
    tableName: 'previousUsTravel',
    fields: [
      {
        name: 'beenToUs',
        label: 'Have you ever been in the U.S.?',
        type: 'radio',
        options: ['Yes', 'No'],
      },
      {
        name: 'issuedVisa',
        label: 'Have you ever been issued a U.S. Visa?',
        type: 'radio',
        options: ['Yes', 'No'],
      },
      {
        name: 'visaRefused',
        label: 'Have you ever been refused a U.S. Visa, been refused admission to the United States, or withdrawn your application for admission at the port of entry?',
        type: 'radio',
        options: ['Yes', 'No'],
      },
      {
        name: 'immigrantPetitionFiled',
        label: 'Has anyone ever filed an immigrant petition on your behalf with the United States Citizenship and Immigration Services?',
        type: 'radio',
        options: ['Yes', 'No'],
      },
    ],
  },
      
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState<Record<string, any>>({});
  const [formKey, setFormKey] = useState(Date.now()); 

  const handleNext = async (data: Record<string, any>) => {
    const table = formSteps[currentStep].tableName;
  
    // Save to MongoDB
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ table, data }),
    });
  
    setCollectedData((prev) => ({ ...prev, [table]: data }));
  
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setFormKey(Date.now());
    } else {
      console.log('✅ All steps complete!', collectedData);
    }
  };
  
  const step = formSteps[currentStep];

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Step {currentStep + 1}</h1>
      {/* 🔧 Debug dropdown */}
    <select
      className="mb-4 border px-3 py-2 rounded"
      value={currentStep}
      onChange={(e) => {
        setCurrentStep(Number(e.target.value));
        setFormKey(Date.now()); // Reset form if needed
      }}
    >
      {formSteps.map((_, i) => (
        <option key={i} value={i}>
          Go to Step {i + 1}
        </option>
      ))}
    </select>
      <Form
        key={formKey} 
        fields={step.fields}
        tableName={step.tableName}
        onNext={handleNext}
      />
    </div>
  );
}
