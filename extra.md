Consolas, 'Courier New', monospace



{
    "editor.fontFamily": "Consolas, 'Courier New', monospace",
    "editor.indentSize": "tabSize"
}



const [password, setPassword] = useState("");
  const [passwordVer, setPasswordVer] = useState("");

  const passHandler = (event) => {
    let passValue;
    passValue = event.target.value;
    setPassword(passValue);
  };

  const passVerHandler = (event) => {
    let passVerValue;
    passVerValue = event.target.value;
    setPasswordVer(passVerValue);
  };

  const VALIDATION_PASS_MATCH = () => {
    let isValid = false;
    if (passwordVer === password) {
      isValid = true;
    }
    return isValid;
  };