import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,TextInput, } from 'react-native';
import { Dimensions } from 'react-native';
import React from 'react';
import { useState } from 'react';
const [search, setSearch] = useState('');



export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Seja Bem-vindo(a)!</Text>
      <View style={{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 10,
  backgroundColor: '#fff',
  borderBottomWidth: 1,
  borderBottomColor: '#ccc'
}}>
  
  {/* Logotipo */}
  <Image
    source={{ uri: 'https://1000logos.net/wp-content/uploads/2021/04/Sephora-logo.png' }}
    style={{ width: 100, height: 30, resizeMode: 'contain' }}
  />

  {/* Barra de pesquisa */}
  <TextInput
    placeholder="Buscar"
    style={{
      flex: 1,
      height: 35,
      marginHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10
    }}
  />

  {/* Ícone de perfil ou carrinho */}
  <TouchableOpacity>
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>👤</Text>
  </TouchableOpacity>

</View>

      <Image 
        source={require('../../assets/images/banner.png')}
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
       
          <View style={{ alignItems: 'center', marginRight: 10 }}> 
        <Image 
          source={{ uri: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwfe3cf076/images/Color%20BR/RARE%20BEAUTY/luminizer/HIGHLIGHTER-RARE%20BEAUTY-POSITIVE%20LIGHT%20-%20LIQUID%20LUMINIZER%20-%20MESMERIZE840122900105_1500px.jpg?sw=1200&sh=1200&sm=fit' }} 
          style={{ width: 200, height: 200 }}
        />  <Text style={{ fontSize:15, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
      RARE BEAUTY 
      </Text>
      <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 2 }}>
      iluminador líquido rare beauty positive light
      </Text>
      
          </View>


          <View style={{ alignItems: 'center', marginRight: 10 }}> 
        <Image 
          source={{ uri: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw74926545/images/hi-res-BR/Frag/Nova%20pasta/Maria%20Helena/1.3348901683593_1000px.jpg?sw=1200&sh=1200&sm=fit' }} 
          style={{ width: 200, height: 200 }}
        />   <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>
        DIOR
      </Text>
      <Text style={{ fontSize: 12, color: '#777', textAlign: 'center', marginTop: 2 }}>
      perfume sólido mini miss dior blooming bouquet feminino eau de toilette
      </Text>
          </View> 
 
          <Image 
    source={{ uri: 'https://s2.glbimg.com/duqOu2XMtOBHOTriEW8bS0v2Tgs=/e.glbimg.com/og/ed/f/original/2014/12/18/164671201.jpg' }} 
    style={{ width: 100, height: 100, marginBottom: 10, alignSelf: 'center' }}
  />
      </ScrollView>

      <Text style={styles.sectionTitle}>Categorias</Text>
      <View style={styles.categories}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>

      <TouchableOpacity style={styles.categoryButton}>
    <Text style={styles.categoryText}>Skincare</Text>
  </TouchableOpacity>
  <Image 
    source={{ uri: 'https://t3.ftcdn.net/jpg/04/22/50/10/360_F_422501065_iKBL7qoOhaXqjxONodvSnGmuuwkt7pbf.jpg' }} 
    style={{ width: 400, height: 400, marginTop: 30 }} 
  />  </View>

<View style={{ alignItems: 'center', marginBottom: 20 }}>
  <TouchableOpacity style={styles.categoryButton}>
    <Text style={styles.categoryText}>Maquiagem</Text>
  </TouchableOpacity>
  <Image 
    source={{ uri: 'https://s2.glbimg.com/duqOu2XMtOBHOTriEW8bS0v2Tgs=/e.glbimg.com/og/ed/f/original/2014/12/18/164671201.jpg' }} 
    style={{ width: 400, height: 400, marginTop: 30 }} 
  />
</View>
   
<View style={{ alignItems: 'center', marginBottom: 30 }}>
  <TouchableOpacity style={styles.categoryButton}>
    <Text style={styles.categoryText}>Perfumes</Text>
  </TouchableOpacity>
  <Image 
    source={{ uri: 'https://st4.depositphotos.com/13108546/38297/i/450/depositphotos_382978922-stock-photo-portrait-young-beautiful-woman-perfume.jpg' }} 
    style={{ width: 400, height: 400, marginTop: 30 }} 
  />
</View>








      </View>


      <Text style={styles.footer}>Inspire-se. Transforme-se.</Text>

      <View style={{
  marginTop: 40,
  padding: 20,
  backgroundColor: '#f5f5f5',
  alignItems: 'center'
}}>
  <Text style={{ fontSize: 12, color: '#555', textAlign: 'center' }}>
    Desenvolvido por LIARA e ANA KEYLE • Contato: ETEREAa@gmail.com
  </Text>
  <Text style={{ fontSize: 12, color: '#555', textAlign: 'center', marginTop: 5 }}>
    © 2025 - Todos os direitos reservados.
  </Text>
</View>


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
    width: 2040, height: 226,
     alignSelf: 'center', // <-- ESSENCIAL PARA CENTRALIZAR
    marginVertical: 10  // Opcional, espaço acima/abaixo
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
