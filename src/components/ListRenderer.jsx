export default function ListRenderer() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <div className="container">
      <ul>
        {fruits.map((el, idx) => {
          return <li key={idx}>{el}</li>;
        })}
      </ul>
    </div>
  );
}
