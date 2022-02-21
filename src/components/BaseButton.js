import { Spinner } from "./Spinner";

const styles = {
  maxWidth: "508px",
  width: "100%",
  margin: "0",
  paddingTop: "13px",
  paddingBottom: "13px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "400",
  backgroundColor: "#279ee1",
  borderRadius: "10px",
  outline: "0",
  border: "0",
  color: "white",
  fontSize: "14px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  marginTop: "32px",
  marginBottom: "32px",
  cursor: "pointer",
};

export const BaseButton = ({ text, showSpinner, onClick }) => {
  return (
    <button style={styles} onClick={onClick}>
      {showSpinner ? <Spinner></Spinner> : text}
    </button>
  );
};
