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
        this.calculatorBMI(weight, this.state.height);
    }

    handleHeightChange(event) {
        const height = event.target.value;


        this.setState({
            height: height,
        });
        this.calculatorBMI(this.state.weight, height);
    }

    calculatorBMI(weight, height) {
        height = height / 100;
        let bmi = (weight / (height * height)).toFixed(2);
        this.setState({
            bmi: bmi,
        });
    }

    render() {
        return (

            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div className="calculator">
                        <div class="mb-3">
                            <label htmlFor="your-weight" class="form-label">Weight (kg): </label>
                            <input type="number" id="your-weight" class="form-control" value={this.state.weight} onChange={this.handleWeightChange} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="your-height" class="form-label">Height (cm): </label>
                            <input type="number" id="your-height" class="form-control" value={this.state.height} onChange={this.handleHeightChange} />
                        </div>
                        <div class="mb-3">
                            <label>BMI: </label>
                            <span className="calculator-bmi">{this.state.bmi}</span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Calculator;