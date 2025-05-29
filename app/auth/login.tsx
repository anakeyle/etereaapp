import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function CadastroPassageiro() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastrar = () => {
    // Aqui você poderia adicionar lógica para enviar os dados para API.
    console.log({ nome, email, telefone, senha });

    // Correto: não usar extensão .tsx
    router.push('/auth/home');  // ou '/home', depende de como está seu app
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de novo passageiro</Text>

      <Text>Nome Completo</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text>Telefone/Whatsapp</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />

      <Text>Senha</Text>
      <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />

      <Button title="Cadastrar" onPress={handleCadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc' }})
