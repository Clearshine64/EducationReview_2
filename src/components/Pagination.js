import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
Pagination.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  totalNum: PropTypes.number,
  perPageNum: PropTypes.number,
}
export default function Pagination({ onChange, value = 1, totalNum, perPageNum = 5, }) {

  const totalPage = totalNum / perPageNum;

  return (
    <div className="flex gap-3 items-center justify-center">
      <button className="btn bg-neutral/40 btn-circle text-neutral hover:text-white" onClick={() => onChange(value > 1 && value - 1)}>
        <Icon icon={'fluent:chevron-left-12-filled'} />
      </button>
      <Icon icon={'mdi:dots-horizontal'} />
      {[...Array(5)].map((_, index) => {
        var No = 1;
        if (value > 2) {
          No = value + index - 2;
        }
        else if (value <= 2) {
          No = index + 1;
        }
        return (
          No <= totalPage &&
          <button key={index} className={`btn bg-neutral/40 btn-circle hover:text-white
                ${value === No && 'bg-neutral text-white'}
                `}
            onClick={() => onChange(index)}
          >
            {No}
          </button>


        )
      })}
      <Icon icon={'mdi:dots-horizontal'} />
      <button className="btn bg-neutral/40 btn-circle text-neutral hover:text-white"
        onClick={() => onChange(value < totalPage && value + 1)}
      >
        <Icon icon={'fluent:chevron-right-12-filled'} />
      </button>
    </div>
  )
}