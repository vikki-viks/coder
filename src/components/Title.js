const styles = {
  color: "#b3b3b3",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "400",
  fontSize: "24px",
  letterSpacing: "2px",
};

export const Title = ({ text }) => {
  return <h1 style={styles}>{text}</h1>;
};
