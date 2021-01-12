const styles = {
  maxWidth: "460px",
  width: "100%",
  margin: "0",
  padding: "15px 24px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "400",
  backgroundColor: "#4C4C4C",
  borderRadius: "20px",
  outline: "0",
  border: "0",
  color: "white",
  fontSize: "18px",
};

export const BaseInput = ({ placeholder }) => {
  return <input style={styles} placeholder={placeholder} />;
};
