import PropTypes from 'prop-types';

Rating.propTypes = {
  value: PropTypes.number,
  readOnly: PropTypes.bool,
  noValue: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
}
export default function Rating({ value = 0, onChange, readOnly = false, noValue = false, className }) {

  return (
    <div className={`flex gap-2 items-center`}>
      <div className={`rating gap-1 rating-sm  ${className}`}>
        {[...Array(5)].map((_, index) =>
          <input key={index} type="radio" readOnly={readOnly}
            className={`mask mask-star-2 bg-neutral ${readOnly && 'pointer-events-none'}`}
            checked={Math.floor(value) === (index + 1)}
            onChange={() => onChange(index + 1)}
          />
        )}
      </div>
      {!noValue && `(${value})`}
    </div>
  )
}