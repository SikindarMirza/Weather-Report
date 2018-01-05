import React from 'react';
import { Sparklines, SparklinesLine } from 'react-Sparklines';


export default (props) => {
  return(
    <div>
      <Sparklines height={80} width={140} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}
