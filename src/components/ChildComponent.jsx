export default function ChildComponent({ firstName, lastName, age }) {
  return (
    <div className="container">
      <h1>Child</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
}
