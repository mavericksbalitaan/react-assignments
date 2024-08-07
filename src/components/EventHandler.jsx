export default function EventHandler() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="container">
      <button type="button" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}
