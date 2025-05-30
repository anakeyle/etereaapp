import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Seja Bem-vindo(a)!</Text>

      <Image 
        source={require('../../assets/images/aesthetic.png')}
        style={styles.banner}

      />

      <Text style={styles.sectionTitle}>Destaques</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
       
        <Image 
           source={{ uri: 'https://encurtador.com.br/O2VPw' }} 
           style={{ width: 200, height: 200 }}
        />
       <Image 
          source={{ uri: 'https://encurtador.com.br/hnbBB' }} 
          style={{ width: 200, height: 200 }}
        />
         <Image 
          source={{ uri: 'https://encurtador.com.br/WocYB' }} 
          style={{ width: 200, height: 200 }}
        />
        <Image 
          source={{ uri: 'https://shre.ink/e8xQ' }} 
          style={{ width: 200, height: 200 }}
        />
         <Image 
          source={{ uri: 'https://www.mundodosdecants.com.br/wp-content/uploads/2021/03/Ocean-di-Gioia-Giorgio-Armani.jpg' }} 
          style={{ width: 200, height: 200 }}
        />
         <Image 
          source={{ uri: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/716136/1.-3348900378551-3348900378575-3348900425309.jpg.jpg?v=638690019195730000' }} 
          style={{ width: 200, height: 200 }}
        />
        <Image 
          source={{ uri: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw29cc82dc/images/Color%20BR/guerlain/OMBREG/3346470436534_1_1500px.jpg?sw=1200&sh=1200&sm=fit' }} 
          style={{ width: 200, height: 200 }}
        />
       



      </ScrollView>

      <Text style={styles.sectionTitle}>Categorias</Text>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Maquiagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Skincare</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Perfumes</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Inspire-se. Transforme-se.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginVertical: 16
  },
  banner: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 12
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#E91E63',
    marginLeft: 16,
    marginTop: 24,
    marginBottom: 8
  },
  carousel: {
    paddingLeft: 16
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 12
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 24
  },
  categoryButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  categoryText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  footer: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    marginBottom: 32
  }
});
