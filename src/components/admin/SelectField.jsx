const SelectField = ({
  label,
  options,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-700">
        {label}
      </label>

      <select
        className="
          w-full
          h-12
          rounded-xl
          border
          border-gray-300
          px-4
          outline-none
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
        "
      >
        <option>Select</option>

        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;