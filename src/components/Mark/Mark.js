import "./Mark.css";

const Mark = ({ isToggled, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`mark-container ${isToggled && "mark-toggled"}`}
    />
  );
};

export default Mark;
