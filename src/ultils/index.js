export function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

export function ValidatePhoneNumber(phoneNumber) {
  if (phoneNumber.match(/^\d{10}$/)) {
    return true;
  } else {
    return false;
  }
}
