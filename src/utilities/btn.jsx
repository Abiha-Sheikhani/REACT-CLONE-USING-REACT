const Btn = ({ value, bgColor , textcolour ,bord}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        fontWeight: "600",
        fontSize: "larger",
        padding: "15px 30px",
        borderRadius: "25px",
        border: bord,
        color: textcolour
      }}
      className="btn"
    >
      {value || "click"}
    </button>
  );
};

export default Btn;
