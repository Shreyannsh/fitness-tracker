import "./loader.css";

export default function Loader(props) {
  if (!props.loading) {
    return null;
  }
  return (
    <div className="parent">
      <img
        className="loader"
        src="https://i.gifer.com/ZKZg.gif"
        alt="loading"
      />
    </div>
  );
}
