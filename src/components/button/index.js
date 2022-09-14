import "./style.scss";

export function Button({ children, onClick, disabled = false }) {
  return (
    <button
      className={`button ${disabled ? "disabled" : "active"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
