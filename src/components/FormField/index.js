import React from 'react';

function FormField({ label, name, type, value, onChange }) {
  if (type === 'textarea') {
    return (
      <div>
        <label>
          {label}: 
          <textarea
            type="text"
            value={value}
            name={name}
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
  return (
    <div>
      <label>
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;
