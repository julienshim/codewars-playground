function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{6,}$/g.test(password);
}
