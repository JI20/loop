import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !age) {
      setMessage("Please fill in both fields.");
      return;
    }

    setMessage("Account created successfully!");
    navigate("/map")
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[1-9][0-9]*$/.test(value)) {
      setAge(value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Loop.</h1>
        <p className="text-center text-gray-600 mb-4">
          Stay in the loop and connect with others. Let's fight loneliness together.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              type="text"
              value={age}
              onChange={handleAgeChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Create Account
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-500 text-sm">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Register;
