import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  return (
    <div className="container">
      <h1>Parent</h1>
      <ChildComponent firstName="John" lastName="Doe" age="99" />
    </div>
  );
}
