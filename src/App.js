import React from "react";
import { Icon, Label, Button } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <hr />
      <button class="ui button">Read More</button>
      <button class="ui primary button">Read More</button>
      <button class="ui secondary button">Read More</button>
      <button class="ui positive button">Read More</button>
      <button class="ui negative button">Read More</button>
      <hr />
      <button class="ui icon button">
        <i class="cloud icon" />
      </button>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <hr />
      <Label>
        <Icon name="mail" /> 23
      </Label>
    </div>
  );
}

export default App;
