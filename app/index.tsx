import { Text, View, Image } from "react-native";
import { InputRectangle1 } from "./components/common/input";
import { InputSignInButton } from "./components/common/button";
const LogoImage = require ('./assets/images/logo.png')
const BemVindoImage = require ('./assets/images/bemvindo.png')
const GoogleIcon = require ('./assets/images/googleicon.png')



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#040404',
        width: 412,
        height: 917
      }}
    >
      <Image source={LogoImage} 
        style={{
          width: 100,
          height: 100,
        }} />
      <Image source={BemVindoImage}
        style={{
          width: 264.12,
          height: 30.4
        }}/>
      <View>
        <Image source={GoogleIcon}/>
        <Text style={{color:'#FFFFFF'}}>Entre com o google</Text>
      </View>
      <Text style={{color:'#FFFFFF'}}>Endereço de Email</Text>
      <InputRectangle1/>
      <Text style={{color:'#FFFFFF'}}>Senha</Text>
      <InputRectangle1/>
      <Text style={{color:'#FFFFFF'}}>Esqueci a senha</Text>
      <View>
        <View></View>
        <Text style={{color:'#FFFFFF'}}>Mantenha-me conectado</Text>
      </View>
      <InputSignInButton/>
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    </View>
  );
}
