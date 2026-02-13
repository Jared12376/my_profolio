export default function Button({ text }: { text: string }) {
    return (
        <button className="myButton bg-yellow-400 px-4 py-2 rounded">
            {text}
        </button>
    );
}