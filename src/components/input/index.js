import "./style.scss";

function Input({ register, error, ...rest }) {
  return (
    <div className="input-box__container">
      <input className="input-box" type="text" {...rest} {...register} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Input;
