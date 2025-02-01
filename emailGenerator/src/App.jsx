import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid p-5">
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-underline">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#something">
                E-mail Generator
              </a>
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
                  Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.
                  </td>
                </tr>
              </tbody>
            </table>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default App;
