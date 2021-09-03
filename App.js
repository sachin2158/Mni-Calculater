import React ,{useState} from 'react';
import {View,Text,StyleSheet ,TextInput,Button} from 'react-native';
let App=(props)=>{
	let [result,setResult]=useState(0)
	let [num1,setNum1]=useState('')
	let [num2,setNum2]=useState('')

	return(
		<View style={styles.cont}>
		<Text style={styles.text}>Result:{result}</Text>
		  <TextInput style={styles.input} autoCapitalize="none" keyboardType="number-pad" autofocus={true} value={num1} onChangeText={val=>setNum1(val)} />
		  <TextInput style={styles.input} autoCapitalize="none" keyboardType="number-pad" autofocus={false} value={num2} onChangeText={val=>setNum2(val)}/>
		 <View style={ styles.btn}>
		    <Button title="+" color="red" onPress={() => {
		    	const val1=parseFloat(num1)
		    	const val2=parseFloat(num2)
		    	setResult(val1+val2)

		    }}/>
		    <Button title="-"  color="green" onPress={() => {
		    	const val1=parseFloat(num1)
		    	const val2=parseFloat(num2)
		    	setResult(val1-val2)
		    }}/>
            <Button title="*" color="blue" onPress={() => {
            	const val1=parseFloat(num1)
		    	const val2=parseFloat(num2)
		    	setResult(val1*val2)
            }}/>
		    <Button title="/"  color="purple"onPress={() => {
		    	const val1=parseFloat(num1)
		    	const val2=parseFloat(num2)
		    	
		    	if(val2 <= 0){
		    		setResult('this is not define')
		    	}else{
		    		setResult(val1/val2)

		    	}
		    }}/>


		 </View>
		 
		</View>
	);

}
export default App;
 const styles=StyleSheet.create({
	cont:{flex:1 ,justifyContent:"center" ,margin:10},
	btn:{ flexDirection:'row',width:'80%' ,justifyContent:"space-around",alignItems:'center'},
	input:{width:'90%',borderBottomColor:"grey",borderBottomWidth:2,marginVertical:10,padding:5,fontSize:22 ,textAlign:'center'},
	text:{fontSize:25,textAlign:'center'}
})