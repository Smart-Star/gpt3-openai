import './button.css';

export const Button = ({ label }) => {
  return (
    <button className="button__small" type="button">
      {label}
    </button>
  );
};
