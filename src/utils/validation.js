const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

export function validName(userName) {
  const testUserName = userName ? userName.trim() : "";
  if (testUserName === "") return "Username is required!";
  if (testUserName.length < 3) return "Username must be at least 3 characters.";
  return "";
}

export function validEmail(userEmail) {
  const testUserEmail = userEmail ? userEmail.trim() : "";
  if (testUserEmail === "") return "Email is required!";
  if (!emailPattern.test(testUserEmail)) return "Please write Email in correct format!";
  return "";
}

export function validPass(userPassword) {
  const password = userPassword ? userPassword.trim() : "";
  if (password === "") return "Password is required!";
  if (!passwordPattern.test(password)) {
    return "Password must contain 8 characters, uppercase, lowercase, number and special character";
  }
  return "";
}

export function confirmPass(userPassword, confirmPassword){

 const confirm = confirmPassword ? confirmPassword.trim() : "";

 if(confirm==="")
 return "Confirm password is required!";

 if(userPassword !== confirm)
 return "Passwords do not match!";

 return "";
}

export function validateForm(formData) {
  const errors = {};

  errors.userName = validName(formData.userName);
  errors.userEmail = validEmail(formData.userEmail);
  errors.userPassword = validPass(formData.userPassword);
  errors.confirmPassword = confirmPass(formData.userPassword, formData.confirmPassword);

  const isValid = Object.values(errors).every((err) => err === "");

  return { errors, isValid };
}