import { useState } from 'react'
import './App.css'

function App() {
  const [userName, setUserName] = useState("")
  const [userEmail, setEmail] = useState("")
  const [userPassword, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [errorUserName, setErrorUserName] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPass, setErrorPassword] = useState("")
  const [errorConfirmPass, setErrorConfirmPass] = useState("")

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  function validName() {
    const testUserName = userName.trim()
    if (testUserName === "") {
      setErrorUserName("Username is required!")
      return false;
    } else if (testUserName.length < 3) {
      setErrorUserName("Username must be at least 3 characters.")
      return false
    } else {
      setErrorUserName("")
      return true;
    }
  }

  function validEmail() {
    const testUserEmail = userEmail.trim()
    const testEmail = emailPattern.test(testUserEmail)

    if (testUserEmail === "") {
      setErrorEmail("Email is required!")
      return false
    } else if (!testEmail) {
      setErrorEmail("Please write Email in correct format!")
      return false
    } else {
      setErrorEmail("")
      return true
    }
  }

  function validPass() {
    const password = userPassword.trim();
    const testPassword = passwordPattern.test(password);

    if (password === "") {
      setErrorPassword("Password is required!");
      return false;
    } else if (!testPassword) {
      setErrorPassword("Password must contain 8 characters, uppercase, lowercase, number and special character");
      return false
    } else {
      setErrorPassword("");
      return true
    }
  }

  function confirmPass() {
    const password = userPassword;
    const confirmUserPass = confirmPassword;

    if (confirmUserPass === "") {
      setErrorConfirmPass("Confirm password is required!");
      return false;
    } else if (password !== confirmUserPass) {
      setErrorConfirmPass("Passwords do not match!");
      return false;
    } else {
      setErrorConfirmPass("");
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    const isNameValid = validName()
    const isEmailValid = validEmail()
    const isPassValid = validPass()
    const isConfirmValid = confirmPass()

    if (isNameValid && isEmailValid && isPassValid && isConfirmValid) {
      alert("Form Submitted Successfully! 🎉")
    } else {
      alert("Form has validation errors.")
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center p-5">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">

        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onBlur={validName}
              className="w-full px-5 py-3 rounded-xl bg-white/90 outline-none focus:ring-4 focus:ring-blue-400 transition"
            />
            <p className="text-red-400 text-sm mt-1">
              {errorUserName}
            </p>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validEmail}
              className="w-full px-5 py-3 rounded-xl bg-white/90 outline-none focus:ring-4 focus:ring-blue-400 transition"
            />
            <p className="text-red-400 text-sm mt-1">
              {errorEmail}
            </p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validPass}
              className="w-full px-5 py-3 rounded-xl bg-white/90 outline-none focus:ring-4 focus:ring-blue-400 transition"
            />
            <p className="text-red-400 text-sm mt-1">
              {errorPass}
            </p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={confirmPass}
              className="w-full px-5 py-3 rounded-xl bg-white/90 outline-none focus:ring-4 focus:ring-blue-400 transition"
            />
            <p className="text-red-400 text-sm mt-1">
              {errorConfirmPass}
            </p>
          </div>

          <button
            type="submit"
            className="mt-3 py-3 rounded-xl font-bold text-lg transition duration-300 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer active:scale-95"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  )
}

export default App