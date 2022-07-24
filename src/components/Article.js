import React from "react";

let coffee = "☕️";
let box = "🍱 ";

function Article({ title, preview, date = "January 1, 1970", minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} , {"   "}
        {/* {minutesRead()} Minutes Read */}
        {minutes < 30
          ? (coffee = coffee.repeat(Math.ceil(minutes / 5)))
          : minutes > 30
          ? (box = box.repeat(Math.ceil(minutes / 10)))
          : null}
        {minutes}min Read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
