import PropTypes from "prop-types";

const ToggleButton = ({ isDarkMode, showGrid, onToggleGrid }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4"> {/* Updated here */}
        <span 
          onClick={onToggleGrid}
          className={`cursor-pointer text-lg font-medium ${
            isDarkMode ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {showGrid ? "Hide Secret Phrase" : "Show Secret Phrase"}
        </span>
        <button
          onClick={onToggleGrid}
          className={`p-2 rounded-full shadow-lg transition duration-300 ${
            isDarkMode
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
              : "bg-gray-300 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 transform transition-transform duration-300 ${
              showGrid ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

ToggleButton.propTypes = {
  isDarkMode: PropTypes.bool,
  showGrid: PropTypes.bool,
  onToggleGrid: PropTypes.func,
};

export default ToggleButton;
