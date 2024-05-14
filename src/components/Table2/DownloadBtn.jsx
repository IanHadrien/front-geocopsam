import { DownloadIcon } from "./Icons/Icons";

const DownloadBtn = ({ data = [], fileName }) => {
  return (
    <button
      className="download-btn"
      onClick={() => console.log('Download')}
    >
      <DownloadIcon />
      Download
    </button>
  );
};

export default DownloadBtn;
