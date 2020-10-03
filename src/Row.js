import React from 'react';

export default function Row({ info }) {
  return (
    <tr>
      <td>{info.name}</td>
      <td>{info.notes}</td>
      <td>{info.rating} / 10</td>
    </tr>
  );
}
