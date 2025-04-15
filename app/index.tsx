import { Text, View, Image, Dimensions } from "react-native";
import { InputRectangle1 } from "./components/common/input";
import { InputSignInButton } from "./components/common/button";
const LogoImage = require ('./assets/images/logo.png')
const BemVindoImage = require ('./assets/images/bemvindo.png')
const GoogleIcon = require ('./assets/images/googleicon.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        backgroundColor: '#040404',
        width: 412,
        height: 917
      }}
    >
      <Image source={LogoImage} 
        style={{
          width: 100,
          height: 100,
          marginLeft: 156,
          marginTop: 86
        }} />
      <Image source={BemVindoImage}
        style={{
          width: 264.12,
          height: 30.4,
          marginLeft: 74,
          marginTop: 34
        }}/>
      <Text style={{marginTop: 33}}>
        <View style={{flexDirection: "row"}}>
          <Image source={GoogleIcon} style={{marginLeft: 96}}/>
          <Text style={{color:'#FFFFFF', marginLeft: 8}}>Entre com o google</Text>
        </View>
      </Text>
      <Text style={{color:'#FFFFFF', marginLeft: 130, marginTop: 42}}>Ou faça login com</Text>
      <Text style={{color:'#FFFFFF', fontFamily: 'Khula', fontSize: 16, marginLeft: 41, height: 26, width: 138, marginBottom: 3, marginTop: 57}}>Endereço de Email</Text>
      <InputRectangle1/>
      <Text style={{color:'#FFFFFF', fontFamily: 'Khula', fontSize: 16, marginLeft: 41, height: 26, width: 138, marginBottom: 3, marginTop: 49}}>Senha</Text>
      <InputRectangle1/>
      <Text style={{color:'#FFFFFF'}}>Esqueci a senha</Text>
      <Text>
        <View style={{flexDirection:'row'}}>
          <View style={{}}></View>
          <Text style={{color:'#FFFFFF'}}>Mantenha-me conectado</Text>
        </View>
      </Text>
      <InputSignInButton/>
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    </View>
  );
}
