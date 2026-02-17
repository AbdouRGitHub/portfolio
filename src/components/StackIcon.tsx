interface StackIconProps {
    name: string;
}

function StackIcon({name}: StackIconProps) {
    return (
        <div className="stack-item">
            <img
                src={`/stack-icon/${name}.svg`}
                alt={name}
                className="stack-logo"
            />
            <span className="stack-tooltip">{name}</span>
        </div>
    );
}

export default StackIcon;
