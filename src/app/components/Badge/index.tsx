export default function Badge({
    label,
    color,
}: {
    label: string;
    color?: string;
}) {
    return (
        <span
            className="inline-block px-2 py-0.5 rounded-full text-xs font-medium border"
            style={
                color
                    ? { backgroundColor: color + '22', borderColor: color, color }
                    : undefined
            }
        >
            {label}
        </span>
    );
}
