import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Seja Bem-vindo(a)!</Text>

      <Image 
        source={{ uri: 'https://www.sephora.com/productimages/sku/s2667866-main-zoom.jpg?imwidth=612' }}
        style={styles.banner}
      />

      <Text style={styles.sectionTitle}>Destaques</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        <Image 
          source={{ uri: 'https://www.sephora.com/productimages/sku/s2715675-main-zoom.jpg?imwidth=612' }} 
          style={styles.productImage}
        />
        <Image 
          source={{ uri: 'https://www.sephora.com/productimages/sku/s2698275-main-zoom.jpg?imwidth=612' }} 
          style={styles.productImage}
        />
        <Image 
          source={{ uri: 'https://www.sephora.com/productimages/sku/s2631277-main-zoom.jpg?imwidth=612' }} 
          style={styles.productImage}
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
