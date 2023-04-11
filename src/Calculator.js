import { useState } from "react";

function Calculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  function handleWeightChange(event) {
    const weight = event.target.value;
    setWeight(weight);
  }

  function handleHeightChange(event) {
    const height = event.target.value;
    setHeight(height);
  }

  let bmi = calculatorBMI(weight, height);

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="calculator">
          <div className="mb-3">
            <label htmlFor="your-weight" className="form-label">
              Weight (kg):
            </label>
            <input
              type="number"
              id="your-weight"
              className="form-control"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="your-height" className="form-label">
              Height (cm):
            </label>
            <input
              type="number"
              id="your-height"
              className="form-control"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          <div className="mb-3">
            <label>BMI:&nbsp;&nbsp;</label>
            <span className="calculator-bmi">
              <strong>{bmi}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

export function calculatorBMI(weight, height) {
  const minBmi = 5;
  const maxBmi = 200;

  height = height / 100;
  let bmi = Number.parseFloat((weight / (height * height)).toFixed(2));
  if (!Number.isFinite(bmi) || bmi < minBmi || bmi > maxBmi) {
    bmi = "";
  }

  return bmi;
}
