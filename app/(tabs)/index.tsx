
import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 32 }}>
     
     //logo aqui
      <Text style={{ fontSize: 32, fontWeight: '500', marginTop: 16, marginBottom: 32, textAlign: 'center' }}>
        WELCOME TO ETEREA
      </Text>
      <Link href="/auth/cadastro">
      <Text
        style={{ fontSize: 32, fontWeight: 'bold' }}>
        CADASTRAR
      </Text>
      </Link>

      <Text style={{ fontSize: 18, marginBottom: 32 }}>
        Não possui uma conta? Crie agora!
      </Text>
      


     <Link href="/auth/login"> <Text style={{ fontSize: 32, fontWeight: 'bold' }}>
        LOGIN
      </Text>
    </Link>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>
        Já possui uma conta? Entre aqui
      </Text>
    </View>
  )
}

export default index