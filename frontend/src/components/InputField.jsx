function InputField({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-dark-green font-medium text-sm sm:text-base">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-white border border-dark-green-half rounded-[16px] h-[50px] sm:h-[62px] px-4 text-sm sm:text-base focus:outline-none focus:border-dark-green focus:shadow-md focus:ring-2 focus:ring-green/20 transition-all duration-300"
      />
    </div>
  );
}

export default InputField;