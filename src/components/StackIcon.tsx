interface StackIconProps {
    name: string;
}

function StackIcon({name}: StackIconProps) {
    return (
        <div className="stack-item" data-tooltip={name}>
            <img
                src={`/stack-icon/${name}.svg`}
                alt={name}
                className="stack-logo"
            />
        </div>
    );
}

export default StackIcon;
