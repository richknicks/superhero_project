import React from "react";

const Superhero = (props) => {
  const { match } = props;
  const { params } = match;
  const { superheroId } = params;

  return (
    <div>
      <p>{`This is the superhero page for superhero # ${superheroId}`}</p>
    </div>
  );
};

export default Superhero;
