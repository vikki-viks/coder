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
  borderWidth: "0",
  color: "white",
  fontSize: "14px",
};

const errorStyle = {
  borderColor: "red",
  borderWidth: "1px",
  borderStyle: "solid",
};

export const BaseInput = ({ placeholder, setInput, someString, showError }) => {
  let newStyles;

  if (showError) {
    newStyles = { ...styles, ...errorStyle };
  } else {
    newStyles = { ...styles };
  }

  return (
    <input
      style={newStyles}
      placeholder={placeholder}
      value={someString}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
