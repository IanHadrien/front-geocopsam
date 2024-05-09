import { ClipLoader } from "react-spinners";
import PropTypes from 'prop-types';

export default function LoadingClipLoader({ color, loading, size, speedMultiplier, className }) {
  return (
    <div className={className}>
      <ClipLoader
        color={color}
        loading={loading}
        size={size}
        speedMultiplier={speedMultiplier}
      />
    </div>
  );
}

LoadingClipLoader.defaultProps = {
  color: '',
  className: '',
  loading: false,
  size: 30,
  speedMultiplier: 1,
};

LoadingClipLoader.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.number,
  speedMultiplier: PropTypes.number,
};

