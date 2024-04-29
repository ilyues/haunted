import '../styles/Email.css';
import React from 'react';

function EmailSelect({
  id,
  from,
  subj,
  received,
  emailSelected,
  setEmailSelected,
}) {
  return (
    <tr
      className={emailSelected === id ? 'highlighted' : ''}
      onClick={() => {
        setEmailSelected(id);
      }}
    >
      <td>{from}</td>
      <td>{subj}</td>
      <td>{received}</td>
    </tr>
  );
}
export default EmailSelect;
