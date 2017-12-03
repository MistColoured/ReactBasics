import React from 'react';
import ReactDOM from 'react-dom';

const Application = (props) => (
    <div className='scoreboard'>
        <div className='header'>
            <h1>{props.title}</h1>
        </div>

        <div className='players'>
            <div className='player'>
                <div className='player-name'>
                    Mike Allen
                </div>
                <div className='player-score'>
                    <div className='counter'>
                        <button className='counter-action decrement'> - </button>
                            <div className='counter-score'> 31 </div>
                        <button className='counter-action increment'> + </button>
                    </div>
                </div>
            </div>
            <div className='player'>
                <div className='player-name'>
                    Bethany Simmonds
                </div>
                <div className='player-score'>
                    <div className='counter'>
                        <button className='counter-action decrement'> - </button>
                          <div className='counter-score'> 34 </div>
                        <button className='counter-action increment'> + </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

ReactDOM.render(<Application title='Mike rocks!'/>, document.getElementById('container'));