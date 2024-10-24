interface HelloProps {
    name: string;
}

export default function Hello({ name }: HelloProps) {
    return (
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-blue-800">Hello, {name}!</h1>
            <p className="mt-2 text-blue-600">Welcome to your Vite + React + TypeScript + Tailwind project!</p>
        </div>
    );
}