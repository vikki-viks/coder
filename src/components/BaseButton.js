const styles = {
  maxWidth: "508px",
  width: "100%",
  margin: "0",
  paddingTop: "13px",
  paddingBottom: "13px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "400",
  backgroundColor: "#279ee1",
  borderRadius: "20px",
  outline: "0",
  border: "0",
  color: "white",
  fontSize: "18px",
};

export const BaseButton = ({ text }) => {
  return <button style={styles}>{text}</button>;
};
