const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        className={`checkbox checkbox-primary ${size}`}
        defaultChecked={defaultValue}
        // onChange={() => console.log("jello")}
        name={name}
      />
    </div>
  );
};
export default FormCheckbox;
