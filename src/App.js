import React, { Component } from 'react';
import Eng from './components/eng';
import Morse from './components/morse';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            engValue: '',
            morseValue: '',
            mode: 'etm' // 'etm' for English to Morse, 'mte' for Morse to English
        };
    }

    handleEngChange = (value) => {
        this.setState({ engValue: value, morseValue: this.convertToMorse(value) });
    }

    handleMorseChange = (value) => {
        this.setState({ morseValue: value, engValue: this.convertToEnglish(value) });
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            mode: prevState.mode === 'etm' ? 'mte' : 'etm',
            engValue: '',
            morseValue: ''
        }));
    }

    convertToMorse = (text) => {
        const morseCodeMap = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
            'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
            'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
            'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
            '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': ' / '
        };

        return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
    }

    convertToEnglish = (morse) => {
        const englishCodeMap = {
            '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
            '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
            '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
            '-.--': 'Y', '--..': 'Z', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5',
            '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0', '/': ' '
        };

        return morse.split(' ').map(code => englishCodeMap[code] || '').join('');
    }

    copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    render() {
        return (
            <div className='App'>
                <div className='App-header'>

                    {this.state.mode === 'etm' ? (
                        <>
                            <h1>English to Morse Code Converter</h1>
                            <button onClick={this.handleToggle} className='btn btn-light m-5'>Toggle</button>
                            <Eng value={this.state.engValue} onChange={this.handleEngChange} readOnly={false} />
                            <Morse value={this.state.morseValue} readOnly={true} />
                            <button onClick={() => this.copyToClipboard(this.state.morseValue)} className='btn btn-light'>
                                Copy Morse
                            </button>
                        </>
                    ) : (
                        <>
                            <h1>Morse Code to English Converter</h1>
                            <button onClick={this.handleToggle} className='btn btn-light m-5'>Toggle</button>
                            <Morse value={this.state.morseValue} onChange={this.handleMorseChange} readOnly={false} />
                            <Eng value={this.state.engValue} readOnly={true} />
                            <button onClick={() => this.copyToClipboard(this.state.engValue)} className='btn btn-light'>
                                Copy English
                            </button>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
