import React from 'react';
import { QuestsWrapper } from './styles';
import quests from './mock';
// import Quest from './Quest';

function Quests() {
  return (
    <QuestsWrapper>
      {quests.map((quest) => {
        // <Quest {...quest} />;
      })}
    </QuestsWrapper>
  );
}

export default Quests;
