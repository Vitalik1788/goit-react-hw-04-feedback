import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btn_list}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              key={option}
              className={css.btn}
              type="button"
              onClick={onLeaveFeedback}
              data-action={option}
            >
              {option}
            </button>           
          </li>
        )
      })}
    </ul>
  )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string,),
  onLeaveFeedback: PropTypes.func.isRequired,
}