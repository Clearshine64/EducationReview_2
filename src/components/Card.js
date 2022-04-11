import PropTypes from 'prop-types';

Card.propTypes = {
  children:PropTypes.node,
}
export default function Card({children}){

  return(
    <div className='rounded bg-black/50 p-3 text-center'>
      {children}
    </div>
  )
}