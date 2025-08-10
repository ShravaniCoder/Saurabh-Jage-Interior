import PropTypes from "prop-types";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const Dropdown = ({ title, content, isOpen, onClick }) => {
  return (
    <div>
      <button
        className={` my-3 border-solid border-b rounded-sm border-t w-full p-5 flex justify-between ${
          isOpen ? "bg-[#d3b54a] text-white" : "bg-white text-black"
        } hover:bg-[#d3b54a] hover:text-white`}
        onClick={onClick}
      >
        <h2 className="cursor-pointer text-xl  text-start font-spectral-sc-regular">
          {title}
        </h2>
        <span className="plus-icon text-2xl">
          {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isOpen && (
        <div className="flex flex-col md:flex-row border-solid border rounded-sm font-inter">
          <div className=" w-full">
            <ul className=" p-6 mb-2 list-disc">
              {content.map((item, index) => (
                <li
                  key={index}
                  className="answer bg-transparent ml-2 mb-2 font-mono text-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Dropdown;