const Component2 = ({ isDarkMode }) => {
  return (
    <div
      style={{
        background: isDarkMode ? "#000" : "#fff",
        width: "200px",
        height: "200px",
        border: "1px solid green",
        margin: "10px",
      }}
    ></div>
  );
};

export default Component2;
