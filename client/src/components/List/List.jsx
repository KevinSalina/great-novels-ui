import React from 'react';
import './list.css'

function List({ novels }) {

  return (
    <ul>
      {novels.map(novel => {
        return (
          <li key={novel.title}>{`${novel.title} by ${novel.author.nameFirst} ${novel.author.nameLast}`}</li>
        )
      })}
    </ul>
  );
}

export default List;