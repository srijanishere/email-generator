import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Table from './components/Table'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [domainName, setDomainName] = useState("");
  const [extension, setExtensionName] = useState("com");
  const [emailName, setEmailName] = useState("");
  const [domainExtensionName, setDomainExtensionName] = useState("");

  const generateEmailName = useCallback(() => {
    let value = firstName + lastName;
    setEmailName(value);
  }, [firstName, lastName]);

  const generateDomainExtensionName = useCallback(() => {
    let value = "@" + domainName + "." + extension;
    setDomainExtensionName(value);
  }, [domainName, extension]);
  useEffect(() => {
    generateEmailName();
    generateDomainExtensionName();
  }, [firstName, lastName, domainName, extension]);

  const generateEmail = () => {
    return emailName + domainExtensionName;
  };

  const copyToClipboard = async () => {
    window.navigator.clipboard.writeText(generateEmail());
    alert("E-mail address has been copied to the clipboard!");
  };

  return (
    <div className="container-fluid p-5">
      <h1 className="my-2">Domain E-Mail Generator</h1>
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-underline">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="#generator">
                E-mail Generator
              </a>
            </li>
            <li className="nav-item">
              <span class="badge text-bg-dark">Try</span>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h2 class="card-title">About the project</h2>
          <p class="card-text lead">
            The name of the project is "Domain E-Mail Generator". The main idea
            behind the project is to take four main inputs, i.e. first name,
            last name, domain name and extension. Once the required information
            is furnished by the user, the application automatically integrates
            them together to form a domain e-mail, which can then be copied to
            the clipboard by the user for further usage.
            <hr />
            <h4 class="card-title">Technologies leveraged</h4>
            The technologies which have been used in the Domain E-Mail Generator
            project has been listen in the table below, along with a short and
            comprehensive detail about the purpose of the used technology.
            <Table />
          </p>
          <p className="card-text text-danger lead mb-5">
            <b>Note</b> : This web-app does NOT collect/store any user data,
            it's application is based solely on experimental purposes
          </p>
          <div class="card" id="generator">
            <h5 class="card-header">Featured</h5>

            <div class="card-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  First Name
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Last Name
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Domain Name"
                  value={domainName}
                  onChange={(e) => setDomainName(e.target.value)}
                />
              </div>
              <select
                class="form-select"
                aria-label="Default select example"
                value={extension}
                onChange={(e) => setExtensionName(e.target.value)}
              >
                <option value="com">.com</option>
                <option value="co.in">.co.in</option>
                <option value="gov.in">.gov.in</option>
              </select>
              <div class="input-group mb-3 my-3">
                <input
                  type="text"
                  class="form-control"
                  value={emailName}
                  disabled
                />
                <span class="input-group-text" id="basic-addon1">
                  {domainExtensionName}
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                type="button"
                class="btn btn-primary"
              >
                Copy
              </button>
            </div>
            <div class="card-footer text-body-secondary">
              Made with love by Srijan Bandyopadhyay &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
