import ElementCard from "./card";

interface ListProps {
  elements: [];
}

export default function ElementList(props: ListProps) {
  return (
    <div className="card-container">
      {props.elements.map((element) => (
        <ElementCard name={element.name} id={element.id} img={element.img} />
      ))}
    </div>
  );
}
