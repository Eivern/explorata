export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "rounded cursor-pointer border-gray-400 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600" +
                className
            }
        />
    );
}
