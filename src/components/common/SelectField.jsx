const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">
          Select {label}
        </option>

        {options.map((option) => {
          // Department object
          if (typeof option === "object") {
            return (
              <option
                key={option._id}
                value={option._id}
              >
                {option.name}
              </option>
            );
          }

          // Normal string option
          return (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;