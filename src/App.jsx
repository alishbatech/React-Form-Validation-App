import { useState } from 'react';
import InputField from './components/InputField';
import { validateForm, validName, validEmail, validPass, confirmPass } from './utils/validation';
import './App.css';

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPassword] = useState("");
  const [errorConfirmPass, setErrorConfirmPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = validateForm({
      userName,
      userEmail,
      userPassword,
      confirmPassword,
    });

    setErrorUserName(errors.userName);
    setErrorEmail(errors.userEmail);
    setErrorPassword(errors.userPassword);
    setErrorConfirmPass(errors.confirmPassword);

    if (isValid) {
      alert("Form Submitted Successfully! 🎉");
    } else {
      alert("Form has validation errors.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-700 via-blue-500 to-pink-700 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <InputField
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={() => setErrorUserName(validName(userName))}
            error={errorUserName}
          />

          <InputField
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setErrorEmail(validEmail(userEmail))}
            error={errorEmail}
          />

          <InputField
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setErrorPassword(validPass(userPassword))}
            error={errorPass}
          />

          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setErrorConfirmPass(confirmPass(userPassword, confirmPassword))}
            error={errorConfirmPass}
          />

          <button
            type="submit"
            className="mt-3 py-3 rounded-2xl font-bold text-lg transition duration-300 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer active:scale-95"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;