import React from 'react';

interface QuestionProp {
  title: string;
}

const Question = ({ title }: QuestionProp) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Question;
