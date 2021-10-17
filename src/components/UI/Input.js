import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label className={classes.input}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
