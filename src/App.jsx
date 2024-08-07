import HelloWorld from "./components/HelloWorld";
import PersonalInfo from "./components/PersonalInfo";
import ElementRenderer from "./components/ElementRenderer";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import ParentComponent from "./components/ParentComponent";
import EventHandler from "./components/EventHandler";
import ListRenderer from "./components/ListRenderer";
import ConditionalRenderer from './components/ConditionalRenderer'

export default function App() {
  return (
    <div>
      <HelloWorld />
      <PersonalInfo />
      <ElementRenderer />
      <ClassComponent />
      <FunctionComponent />
      <ParentComponent />
      <EventHandler />
      <ListRenderer />
      <ConditionalRenderer />
    </div>
  );
}
