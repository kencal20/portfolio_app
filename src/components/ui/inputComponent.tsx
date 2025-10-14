type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string; // ✅ Added this line
};

export const InputComponent: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  className = "", // ✅ Default empty class
}) => {
  return (
    <div className={className}>
      <label className="block text-gray-400 font-medium">{label}</label>

      {type === "textarea" ? (
        <textarea
          name={name}
          required={required}
          onChange={onChange}
          value={value}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}
    </div>
  );
};
