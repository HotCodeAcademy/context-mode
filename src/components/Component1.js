import Component2 from "./Component2";

const Component1 = () => {
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
        <p>Preview</p>
      <Component2/>
    </div>
  );
};

export default Component1;
