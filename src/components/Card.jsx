export default function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
}
