import React from "react";

function Table() {
  return (
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
            Vite is a modern JavaScript build tool that provides out-of-the-box
            support for common web patterns, offering optimized builds with the
            flexibility and maturity of rollup paired with a snappy bundleless
            dev server made possible by esbuild and native ES modules.
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>React</td>
          <td>
            React is a JavaScript library for building user interfaces (UIs) on
            the web. React is a declarative, component based library that allows
            developers to build reusable UI components and It follows the
            Virtual DOM (Document Object Model) approach, which optimizes
            rendering performance by minimizing DOM updates. React is fast and
            works well with other tools and libraries.
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Bootstrap</td>
          <td>
            Powerful, extensible, and feature-packed frontend toolkit. Build and
            customize with Sass, utilize prebuilt grid system and components,
            and bring projects to life with powerful JavaScript plugins.
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table