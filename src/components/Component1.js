import Component2 from "./Component2";

const Component1 = ({ isDarkMode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        width: "50%",
        margin: "10px",
      }}
    >
        <p>Preview Mode</p>
      <Component2 isDarkMode={isDarkMode} />
    </div>
  );
};

export default Component1;
