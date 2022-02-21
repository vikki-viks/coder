const styles = {
  color: "#b3b3b3",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "400",
  fontSize: "20px",
  letterSpacing: "2px",
  marginBottom: "16px",
};

export const Title = ({ text }) => {
  return <h1 style={styles}>{text}</h1>;
};
