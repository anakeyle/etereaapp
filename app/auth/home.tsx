import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import React from 'react';



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
      <View style={{ alignItems: 'center', marginRight: 10 }}> 

        <Image 
           source={{ uri: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwd6ee3491/images/Color%20BR/BENEFIT/2024/Mini_Dandelion/s2520492-main-zoom.jpeg?sw=400&sh=400&sm=fit' }} 
           style={{ width: 200, height: 200 }}
        />   <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
        BENEFIT 
      </Text>
      <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 2 }}>
      iluminador em pó benefit
      </Text>
          </View>

          <View style={{ alignItems: 'center', marginRight: 10 }}> 
       <Image 
          source={{ uri: 'https://encurtador.com.br/hnbBB' }} 
          style={{ width: 200, height: 200 }}
        />   <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
        GUERLAIN 
      </Text>
      <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 2 }}>
      óleo labial guerlain kiss kiss bee glow
      </Text>
          </View>

          <View style={{ alignItems: 'center', marginRight: 10 }}> 
         <Image 
          source={{ uri: 'https://encurtador.com.br/WocYB' }} 
          style={{ width: 200, height: 200 }}
        />  <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
        DIOR
      </Text>
      <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 2 }}>
      óleo labial guerlain kiss kiss bee glow
      </Text>
          </View>

          <View style={{ alignItems: 'center', marginRight: 10 }}> 
        <Image 
          source={{ uri: 'https://shre.ink/e8xQ' }} 
          style={{ width: 200, height: 200 }}
        />   <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
        GIVENCHY
      </Text>
      <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 2 }}>
      pó solto givenchy prisme libre
      </Text>

        
          </View>
          <View style={{ alignItems: 'center', marginRight: 10 }}> 
         <Image 
          source={{ uri: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwa0c0564f/images/Color%20BR/DIOR/2025/atualizar/iluminador_dior_backstage/004/1.%203348901530873.jpg?sw=1200&sh=1200&sm=fit' }} 
          style={{ width: 200, height: 200 }}
        />   <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
        DIOR
      </Text>
      <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 2 }}>
      paleta de iluminador dior backstage
      </Text>
          </View>

        <View style={{ alignItems: 'center', marginRight: 10 }}> 
         <Image 
          source={{ uri: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw229ec6c1/images/hi-res-BR/et_benetint_component_open_1500px.jpg?sw=216&sh=216&sm=fit' }} 
          style={{ width: 200, height: 200 }}
        />   <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
        BENEFIT
      </Text>
      <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 2 }}>
      benetint cheek & lip stain
      </Text>

          </View>
      
       <View style={{ alignItems: 'center', marginRight: 10 }}> 
        <Image 
          source={{ uri: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw258e9b93/images/hi-res-BR/diamond_bomb_rose_product_open_2000x2000_1500px.jpg?sw=216&sh=216&sm=fit' }} 
          style={{ width: 200, height: 200 }}
        />  <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
      FENTY
      </Text>
      <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 2 }}>
       bomb stix shimmer fenty beauty
      </Text>
          </View>
       



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
    width: 2040, height: 126
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
