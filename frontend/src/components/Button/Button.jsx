import './Button.css'

function Button({ className, children }) {
  return (
    <button className={className}>
      <div className="button-contents flex justify-start align-centre">
        {children}
      </div>
    </button>
  );
}

export default Button;
