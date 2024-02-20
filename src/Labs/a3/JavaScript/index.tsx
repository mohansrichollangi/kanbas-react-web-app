import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunctions from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import FilterFunctions from "./arrays/FilterFunction";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

    function JavaScript() {
        console.log('Hello World!');
        return (
            <div>
                <h1>JavaScript</h1>
                <FunctionDestructing />
                <Destructing />
                <Spreading />
                <House />
                <TemplateLiterals />
                <FilterFunctions />
                <FindIndex />
                <FindFunctions />
                <JsonStringify />
                <MapFunction />
                <ForLoops />
                <AddingAndRemovingDataToFromArrays />
                <ArrayIndexAndLength />
                <WorkingWithArrays />
                <FunctionParenthesisAndParameters />
                <ImpliedReturn />
                <ArrowFunctions />
                <ES5Functions />
                <TernaryOperator />
                <IfElse />
                <BooleanVariables />
                <VariableTypes />
                <VariablesAndConstants />
            </div>
        );
    }
export default JavaScript;