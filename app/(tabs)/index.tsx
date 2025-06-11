import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 32, paddingTop: 60 }}>
      
    
      <Image  style={{ width: 150, height: 150 }} source={require('../../assets/images/favicon.png')} />


      <Text style={{ fontSize: 32, fontWeight: '500', marginTop: 16, marginBottom: 32, textAlign: 'center' }}>
        WELCOME TO ETEREA
      </Text>
      <Link href="/auth/register" asChild>
      <TouchableOpacity
          style={{
          width: '100%',
           backgroundColor: '#E91E63',
           padding: 16,
            borderRadius: 8,
           alignItems: 'center',
                   }}
              >
  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>CADASTRO</Text>
</TouchableOpacity>
</Link>



      <Text style={{ fontSize: 18, marginBottom: 32 }}>
        Não possui uma conta? Crie agora!
      </Text>

      <Link href="/auth/login" asChild>
      <TouchableOpacity
          style={{
          width: '100%',
           backgroundColor: '#E91E63',
           padding: 16,
            borderRadius: 8,
           alignItems: 'center',
                   }}
              >
  <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>LOGIN</Text>
</TouchableOpacity>
</Link>
      <Text style={{ fontSize: 18 }}>
        Já possui uma conta? Entre aqui
      </Text>

    </View>
  );
};

export default Index;
