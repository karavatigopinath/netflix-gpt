export const validate = (email, password, name) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
 // const isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  if (!isValidEmail) return "Email id is not valid";
  if (!isValidPwd) return "Password id is not valid";
  //if (!isValidName) return "Name id is not valid";

  return null;
};
