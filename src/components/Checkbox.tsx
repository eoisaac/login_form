export const Checkbox = () => {
  return (
    <label className="mt-3 inline-flex items-center">
      <input
        type="checkbox"
        className="checkbox absolute z-10 cursor-pointer opacity-0"
      />
      <div className="form-check-input"></div>
      <span className="cursor-pointer select-none text-gray-700">Checkbox</span>
    </label>
  )
}
