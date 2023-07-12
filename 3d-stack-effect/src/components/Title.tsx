
export default function Title(props : {title: string, index: number,active:boolean, setRotation: (arg0?: number) => void, setIndex: (arg0?: number) => void}) {
    return (
        <div className="title-item"
            onMouseEnter={() => props.setRotation(props.index)}
            onMouseLeave={() => props.setIndex(-1)}
        >

            <h1 className={` ${props.active? 'active' : ''}`}>{props.title}</h1>
        </div>
    )
}
