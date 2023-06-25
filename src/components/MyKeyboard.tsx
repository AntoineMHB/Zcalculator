//Th is function will hold all the buttons of our calculator
import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../../styles/GlobalStyles";
import { myColors } from "../../styles/Colors";

export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<number | null>(null);
    
    //Here we set the value that each button has
    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    }; 

    //This function will handle when the user presses an operation
    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
       };
    
    //Here we have a function that will clear the screen
    const clear = () => {

        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    //Here we have a function that is going to help us get the result
    const getResult = () => {
        switch (operation) {
            case "+":
                clear();
                setResult(parseInt(firstNumber) + parseInt(secondNumber));
                <Text>
                    setResult
                </Text>
                break;

            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;

            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;

            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    };

//A function that's going to manage the number of first number screen depending on the length
    const firstNumberDisplay = ()=> {
        // if (result !== null  ){
        //     const num=99999;
        //     return <Text style={result < num ?[Styles.screenFirstNumber, {color:myColors.result}] : [Styles.screenFirstNumber, {fontSize:50, color: myColors.result}]}>{result?.toString()}</Text>
        // }
    if (firstNumber && firstNumber.length < 6){
        return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
   }
   if (firstNumber ==="") {
    return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
   }
   if (firstNumber.length > 5 && firstNumber.length < 8) {
    return (
        <Text style={[Styles.screenFirstNumber, {fontSize: 70}]}>
            {firstNumber}
        </Text>
    );
   }
   if (firstNumber.length > 7) {
    return (
        <Text style={[Styles.screenFirstNumber, {fontSize: 50}]}>
            {firstNumber}
        </Text>
    )
   }
    };

    return(
        <View style={Styles.viewBottom} >
            <View
                style={{
                height: 120,
                width: "90%",
                justifyContent: "flex-end",
                alignSelf: "center",
                }}
            >
                <Text style={Styles.screenSecondNumber}>
                {secondNumber}
                <Text style={{ color: "purple", fontSize: 50, fontWeight: '500'}}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Styles.row}>
                <Button title="C" isGray onPress={clear} />
                <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                <Button title="%" isGray onPress={() => handleOperationPress("%")} />
                <Button title="/" isBlue onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Button title="7"  onPress={() => handleNumberPress("7")}/>
                <Button title="8"  onPress={() => handleOperationPress("8")} />
                <Button title="9"  onPress={() => handleOperationPress("9")} />
                <Button title="x"  isBlue onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
                <Button title="4" onPress={() => handleNumberPress("4")} />
                <Button title="5" onPress={() => handleOperationPress("5")} />
                <Button title="6" onPress={() => handleOperationPress("6")} />
                <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
                <Button title="1" onPress={() => handleNumberPress("1")} />
                <Button title="2" onPress={() => handleOperationPress("2")} />
                <Button title="3" onPress={() => handleOperationPress("3")} />
                <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Styles.row}>
                <Button title="." onPress={() => handleNumberPress(".")} />
                <Button title="0" onPress={() => handleOperationPress("0")} />
                <Button title="D" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button title="=" isBlue onPress={() => getResult()} />
            </View>
        </View>
    )

}