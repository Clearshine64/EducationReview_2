import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node,
  className:PropTypes.string,
}
export default function Button({ children, className }) {
  return (
    <button 
    className={`outline-0 border-0 bg-black/40 hover:bg-black/60 flex items-center gap-2 px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  )
}