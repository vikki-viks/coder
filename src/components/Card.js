const styles = {
  maxWidth: "476px",
  width: "100%",
  margin: "0",
  padding: "15px 16px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "400",
  backgroundColor: "#4C4C4C",
  borderRadius: "10px",
  outline: "0",
  border: "0",
  color: "white",
  fontSize: "14px",
  overflowWrap: "break-word",
  textAlign: "left",
};

export const Card = ({ text, placeholder }) => {
  return (
    <div style={{ ...styles, color: text ? "white" : "#a1a1a1" }}>
      {text ? text : placeholder}
    </div>
  );
};
