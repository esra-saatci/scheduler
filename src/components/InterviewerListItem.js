import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const interviewerClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected
  });

  const name = props.name
  return (
    <li onClick ={() => props.setInterviewer(props.name)} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={name}
      />
      {props.selected && (name)}
    </li>
  );
}