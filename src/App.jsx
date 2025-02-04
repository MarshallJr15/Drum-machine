import React, { useEffect } from 'react';
import Drum from './Drum';
import './App.css';

const drumPads = [
    { keyCode: 81, keyTrigger: 'Q', id: 'clap', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
    { keyCode: 87, keyTrigger: 'W', id: 'hihat', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
    { keyCode: 69, keyTrigger: 'E', id: 'kick', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
    { keyCode: 65, keyTrigger: 'A', id: 'openhat', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
    { keyCode: 83, keyTrigger: 'S', id: 'boom', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
    { keyCode: 68, keyTrigger: 'D', id: 'ride', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
    { keyCode: 90, keyTrigger: 'Z', id: 'snare', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
    { keyCode: 88, keyTrigger: 'X', id: 'tom', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
    { keyCode: 67, keyTrigger: 'C', id: 'tink', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' },
];

const App = () => {
    const handleKeyPress = (key) => {
        const audio = document.getElementById(key);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            document.getElementById('display').innerText = key;
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const drumPad = drumPads.find(pad => pad.keyCode === e.keyCode);
            if (drumPad) {
                handleKeyPress(drumPad.keyTrigger);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div id="drum-machine">
            <div id="display">Press a key</div>
            <div className="pads">
                {drumPads.map(pad => (
                    <Drum
                        key={pad.id}
                        id={pad.id}
                        keyTrigger={pad.keyTrigger}
                        url={pad.url}
                        handleKeyPress={handleKeyPress}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;