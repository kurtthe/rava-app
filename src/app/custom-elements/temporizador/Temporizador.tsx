import React from 'react';

import './temporizador.scss'

interface Props {
  timerDuration: number;
}

const Temporizador = (props: Props) => (<div className="temporizador" >{props.timerDuration}</div>)

export default Temporizador;
