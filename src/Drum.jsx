import React from 'react';

const DrumPad = ({ keyTrigger, id, url, keyCode, handleKeyPress }) => {
    return (
        <div
            id={id}
            className="drum-pad"
            onClick={() => handleKeyPress(keyTrigger)}
        >
            <audio className="clip" id={keyTrigger} src={url}></audio>
            {keyTrigger}
        </div>
    );
};

export default DrumPad;
