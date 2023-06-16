import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'


export default function CopyExample() {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div>
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div className='inline-flex'>
            <p>dbInsertedId</p>
          <button onClick={copyToClipboard}>copy</button> 
          {copySuccess}
        </div>
      }
      <form>
        <textarea
          ref={textAreaRef}
          value='63d8ec5e790d8f03c1318997'
        />
      </form>
      <li className="nav-item">
              <NavLink
              exact
                to="/ClassificationType"
              >
                NextPage
              </NavLink>
        </li>
    </div>
  );
}
