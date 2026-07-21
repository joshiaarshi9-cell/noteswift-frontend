const SelectField = ({
  label,
  options = [],
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-[15px] font-medium text-gray-700">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="
          h-14
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          text-gray-700
          outline-none
          transition
          focus:border-blue-600
          focus:ring-2
          focus:ring-blue-200
        "
      >
        <option value="">Select</option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;