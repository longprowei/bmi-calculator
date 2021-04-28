import React from 'react';

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

            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="calculator">
                        <div className="mb-3">
                            <label htmlFor="your-weight" className="form-label">Weight (kg): </label>
                            <input type="number" id="your-weight" className="form-control" value={this.state.weight} onChange={this.handleWeightChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="your-height" className="form-label">Height (cm): </label>
                            <input type="number" id="your-height" className="form-control" value={this.state.height} onChange={this.handleHeightChange} />
                        </div>
                        <div className="mb-3">
                            <label>BMI:&nbsp;&nbsp;</label>
                            <span className="calculator-bmi"><strong>{this.state.bmi}</strong></span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Calculator;