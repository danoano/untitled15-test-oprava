import React, { useState } from 'react';


function App() {

  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const onInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = (e: { target: any; }) => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "prosím napište heslo.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "heslá se nehodují.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "prosím napište heslo a zopakujte ho";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "heslá se neshodují.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }

  return (
      <div className="app">
        <form>

          <input
              type="password"
              name="password"
              placeholder='Enter Password'
              value={input.password}
              onChange={onInputChange}
              onBlur={validateInput}></input>
          {error.password && <span className='err'>{error.password}</span>}

          <input
              type="password"
              name="confirmPassword"
              placeholder='Enter Confirm Password'
              value={input.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}></input>
          {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}

          <button>Submit</button>
        </form>
      </div>

  );
}

export default App;
