import PropTypes from 'prop-types';

Input.propTypes = {
  prepend: PropTypes.node,
  className: PropTypes.string,
  register:PropTypes.any
}
export default function Input({ prepend, className,register, ...other }) {
  return (
    <div className={`relative w-full`}>
      <div className='absolute left-0 inset-y-0 flex items-center justify-end w-8'>
        {prepend}
      </div>
      <input className={` ${className} ${prepend && 'pl-12'}`} {...register} {...other} />
    </div>
  )
}