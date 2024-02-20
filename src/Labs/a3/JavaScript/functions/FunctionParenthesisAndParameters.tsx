const square = (a: number) => a * a;
const plusOne = (a: number) => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);


function FunctionParenthesisAndParameters() {
 return (
    <>
        <h4>Parathesis and Parameters</h4>
        twoSquared = {twoSquared}
        <br />
        square(2) = {square(2)}
        <br />
        threePlusOne = {threePlusOne}
        <br />
        plusOne = {plusOne(3)}
        </>
 );
}

export default FunctionParenthesisAndParameters;