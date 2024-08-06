export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={`block w-full text-sm text-gray-700 ` + className}
        >
            {value ? value : children}
        </label>
    );
}
