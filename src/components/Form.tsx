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

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error when typing
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (!formData[field.name] || formData[field.name].toString().trim() === '') {
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
      {fields.map((field) => (
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
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type === 'phone' ? 'tel' : field.type}
              className="border px-3 py-2 rounded w-full"
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.label}
              title={field.label}
            />
          )}

          {errors[field.name] && (
            <p className="text-red-600 text-sm mt-1">{errors[field.name]}</p>
          )}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Next
      </button>
    </div>
  );
}
