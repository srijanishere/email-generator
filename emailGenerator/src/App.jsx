import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [domainName, setDomainName] = useState("domain");
  const [extension, setExtensionName] = useState("com");
  const [emailName, setEmailName] = useState("");
  const [extName, setExtName] = useState("");

  return (
    <div className="container-fluid p-5">
      <h1 className="my-3">Domain E-Mail Generator</h1>
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
            <table class="table my-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Technology</th>
                  <th scope="col">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Vite</td>
                  <td>
                    Vite is a modern JavaScript build tool that provides
                    out-of-the-box support for common web patterns, offering
                    optimized builds with the flexibility and maturity of rollup
                    paired with a snappy bundleless dev server made possible by
                    esbuild and native ES modules.
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>React</td>
                  <td>
                    React is a JavaScript library for building user interfaces
                    (UIs) on the web. React is a declarative, component based
                    library that allows developers to build reusable UI
                    components and It follows the Virtual DOM (Document Object
                    Model) approach, which optimizes rendering performance by
                    minimizing DOM updates. React is fast and works well with
                    other tools and libraries.
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bootstrap</td>
                  <td>
                    Powerful, extensible, and feature-packed frontend toolkit.
                    Build and customize with Sass, utilize prebuilt grid system
                    and components, and bring projects to life with powerful
                    JavaScript plugins.
                  </td>
                </tr>
              </tbody>
            </table>
          </p>
          <p className="card-text text-danger lead mb-5"><b>Note</b> : This web-app does NOT collect/store any user data, it's application solely is based on experimental purposes</p>
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
                onChange={(e) => setExtName(e.target.value)}
              >
                <option value="com">.com</option>
                <option value="co.in">.co.in</option>
                <option value="gov.in">.gov.in</option>
              </select>
              <div class="input-group mb-3 my-3">
                <input type="text" class="form-control" disabled />
                <span class="input-group-text" id="basic-addon1">{extName}</span>
              </div>
              <button type="button" class="btn btn-primary">
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
