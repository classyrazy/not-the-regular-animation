
function Image(props: {url: string, active: boolean, rotationPosition: number}) {
  return (
    <img
    className={`image-item ${props.active ? 'active' : ''}`}
    src={props.url}
    style={{transform: props.active? `scale(1.1) rotate(${props.rotationPosition}deg)` : `scale(1) rotate(0deg)`}}
    />
  )
}

export default Image