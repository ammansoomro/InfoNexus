interface ButtonProps {
    onClick: () => void;
    label: string;
    type?: "primary" | "secondary";
  }
  
  export default function Button({ onClick, label, type = "primary" }: ButtonProps) {
    const buttonStyles =
      type === "primary"
        ? "bg-blue-600 hover:bg-blue-700 text-white"
        : "bg-white text-blue-600 border border-blue-600 hover:bg-gray-100";
  
    return (
      <button
        onClick={onClick}
        className={`w-full mt-4 font-semibold py-2 rounded-md transition ${buttonStyles}`}
      >
        {label}
      </button>
    );
  }
  