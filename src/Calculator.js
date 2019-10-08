import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 0,
            height: 0,
            bmi: 0,
        };
        this.calculatorBMI = this.calculatorBMI.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
    }

    handleWeightChange(event) {
        const weight = event.target.value;
        
        this.setState({
            weight: weight,
        });
        this.calculatorBMI();
    }

    handleHeightChange(event) {
        const height = event.target.value;

        
        this.setState({
            height: height,
        });
        this.calculatorBMI();
    }

    calculatorBMI() {
        const weight = this.state.weight;
        const height = this.state.height / 100;
        console.log('weight:' + weight);
        console.log('height:' + height);
        let bmi = (weight / (height * height)).toFixed(2);
        this.setState({
            bmi: bmi,
        });
    }

    render() {
        return (
            <div className="calculator">
                <div>
                    <label htmlFor="your-weight">Weight (kg)</label>
                    <input type="number" id="your-weight" value={this.state.weight} onChange={this.handleWeightChange}/>
                </div>
                <div>
                    <label htmlFor="your-height">Height (cm)</label>
                    <input type="number" id="your-height" value={this.state.height} onChange={this.handleHeightChange}/>
                </div>
                <div>
                    <label>BMI</label>
                    <div className="calculator-bmi">{this.state.bmi}</div>
                </div>
            </div>
        );
    }
}

export default Calculator;