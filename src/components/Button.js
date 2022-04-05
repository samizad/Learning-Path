<<<<<<< HEAD
import ProtoTypes from 'prop-types';
const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};
Button.defaultProps = {
  color: 'steelblue'
};
Button.propTypes = {
  text: ProtoTypes.string,
  color: ProtoTypes.string,
  onClick: ProtoTypes.func.isRequired
};

export default Button;
=======
import ProtoTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};
Button.defaultProps = {
  color: 'steelblue'
};
Button.propTypes = {
  text: ProtoTypes.string,
  color: ProtoTypes.string,
  onClick: ProtoTypes.func.isRequired
};

export default Button;
>>>>>>> 8525d5a47d59e5c6f07d269c8fd325c282bb7ee7
