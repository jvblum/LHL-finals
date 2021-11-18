export default function Card (props) {
  // sample image for how custom cards can work
  const img = "https://images.squarespace-cdn.com/content/v1/580bf0f32e69cff5c8089d38/1479095450463-R0098N3M7BQ337K75X43/liberty-strap-pink-dog-200px.png?format=750w"

  const onClick = () => {
    props.onClick(prev => props.index);
  }
  return <button className="Card" style={{background: `url(${img})`}} onClick={onClick}>{props.card}</button>
};