import {useAppContext} from '../store/AppContext'

const Component2 = () => {
    const {isDarkMode} = useAppContext()

  return (
    <div
      style={{
        background: isDarkMode ? "#181818" : "#F8F8F8",
        width: "200px",
        height: "200px",
        border: "1px solid green",
        margin: "10px",
      }}
    ></div>
  );
};

export default Component2;
