// src/components/Form.tsx
import React, { useState } from 'react';
import { FieldDefinition } from '@/types/form';

interface Props {
  fields: FieldDefinition[];
  onNext: (data: Record<string, any>) => void;
  tableName: string;
}

export default function Form({ fields, onNext, tableName }: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [disabledFields, setDisabledFields] = useState<Record<string, boolean>>({});

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleCheckboxToggle = (fieldName: string) => {
    setDisabledFields((prev) => {
      const isNowDisabled = !prev[fieldName];
      const updated = { ...prev, [fieldName]: isNowDisabled };

      // Auto-fill value if disabled
      setFormData((formPrev) => ({
        ...formPrev,
        [fieldName]: isNowDisabled ? 'N/A' : '',
      }));

      return updated;
    });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      const isDisabled = disabledFields[field.name];
      const value = formData[field.name];

      if (!isDisabled && (!value || value.toString().trim() === '')) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);

    const isValid = Object.keys(newErrors).length === 0;
    console.log(`[Form Validation] Valid: ${isValid}`, { formData, newErrors });
    return isValid;
  };

  const handleSubmit = () => {
    console.log(`[Form Submit Attempt] Table: ${tableName}`, formData);

    if (!validate()) {
      console.warn(`[Form Error] Validation failed`);
      return;
    }

    console.log(`[Form Submit Success] Pushing to table: ${tableName}`, formData);
    onNext(formData);
  };

  return (
    <div className="p-4 border rounded shadow">
      {fields.map((field) => {
        const isDisabled = disabledFields[field.name] ?? false;
        const isCheckboxField = field.name === 'fullNameNative';

        return (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block font-medium mb-1">
              {field.label}
            </label>

            {field.type === 'radio' ? (
              field.options?.map((opt) => (
                <label key={opt} className="mr-4 inline-flex items-center">
                  <input
                    type="radio"
                    name={field.name}
                    value={opt}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="mr-1"
                  />
                  {opt}
                </label>
              ))
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                className="border px-3 py-2 rounded w-full"
                onChange={(e) => handleChange(field.name, e.target.value)}
                value={formData[field.name] || '- SELECT ONE -'}
              >
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type === 'phone' ? 'tel' : field.type}
                className="border px-3 py-2 rounded w-full disabled:bg-gray-100"
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.label}
                title={field.label}
                value={formData[field.name] || ''}
                disabled={disabledFields[field.name]}
              />
            )}


          {field.options?.includes('not_applicable') && (
            <div className="mt-1">
              <label className="inline-flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={disabledFields[field.name] || false}
                  onChange={() => handleCheckboxToggle(field.name)}
                />
                Does Not Apply
              </label>
            </div>
          )}


            {errors[field.name] && (
              <p className="text-red-600 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        );
      })}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Next
      </button>
    </div>
  );
}
