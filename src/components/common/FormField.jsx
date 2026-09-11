import PropTypes from "prop-types";
import classnames from "classnames";
import { MdClose } from "react-icons/md";

export default function FormField({
  name,
  label,
  register,
  error,
  onClear,
  clearLabel,
  type = "text",
  as = "input",
  autoComplete,
  onInput,
}) {
  const errorId = `${name}-error`;
  const isTextarea = as === "textarea";
  const Control = isTextarea ? "textarea" : "input";

  return (
    <div>
      <div className="contact__input-container">
        <Control
          className={isTextarea ? "contact__textarea" : "contact__input"}
          type={isTextarea ? undefined : type}
          placeholder={label}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...register(name)}
          id={name}
          onInput={onInput}
        />
        <label
          htmlFor={name}
          className={classnames("contact__label", {
            "contact__label--error": error,
          })}
        >
          {label}
        </label>
        <button
          type="button"
          onClick={onClear}
          className="contact__clear"
          id={isTextarea ? "clear-msg" : undefined}
          aria-label={`${clearLabel}: ${label}`}
        >
          <MdClose aria-hidden="true" />
        </button>
      </div>
      {error && (
        <span className="input-error" id={errorId}>
          {error.message}
        </span>
      )}
    </div>
  );
}

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
  onClear: PropTypes.func.isRequired,
  clearLabel: PropTypes.string.isRequired,
  type: PropTypes.string,
  as: PropTypes.oneOf(["input", "textarea"]),
  autoComplete: PropTypes.string,
  onInput: PropTypes.func,
};
