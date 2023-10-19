import loading from "../../assets/image/loading.gif";
const Loading = () => {
  const style = {
    background: `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%)`,
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div style={style} className=" absolute top-0 h-full w-full"></div>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
