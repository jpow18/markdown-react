import './App.css';
import ReactMarkdown from 'react-markdown'
import {useState} from 'react';


function App() {

  const [input, setInput] = useState(
    '![image of code](https://clipground.com/images/coding-16.jpg)'
    + '\n# header'
    + '\n## subheader'
    + '\nThis site was built using[GitHub Pages](https://pages.github.com/).\n\n'
    + '`this is inline code`\n\n'
    + '```\ncode block\n```'
    + '\n - this is a list item'
    + '\n > this is a block quote'
  + '\n\n this is **bold** text\n'
  );
  return (
    <div className="App">
      <textarea
        autoFocus
        id="editor"
        value={input}
        breaks='true'
        onChange={
        (e) => setInput(e.target.value)
      } />
      <div id="preview" breaks='true'>
        <ReactMarkdown children={input} />
      </div>
    </div>
  );
}

export default App;
