import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Settings extends React.Component{
	render(){
		return(
			<View style={styles.container}>
				<Image
            	style={{alignItems: 'center', width: 150, height:150, marginBottom: 5, marginTop:10, }}
            	source={{uri: 'https://scontent.fsub2-2.fna.fbcdn.net/v/t1.0-9/40044386_246628869225574_7152952574730043392_o.jpg?_nc_cat=0&_nc_eui2=AeGFclgg_dOhkgTPGZQqXrcOEuQ5Nbm3_7UISe5F9y_XvCbik9yRRxBq-jnDVHgW8rlqSZChtOXWSlfBwOGqpcPFQouuQ93_b0cixzL_YBtDtfsaZSgquVb3_ErbW9-6odQ&oh=493d97e6a2d4fe7691059f4f4f72da46&oe=5C33F74A'}}
            	/>
				
                <Text style={styles.edit}>Symisius Lintang Ranataru </Text>
                <Text style={styles.edit}>XI RPL 3 </Text>
                <Text style={styles.edit}>nomor 37  </Text>
                <Text style={styles.edit}>SMK Telkom Purwokerto </Text>
				<Text style={{ marginBottom : 100}}></Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000066',
  },

  edit : {
	color : "#fff",
	fontSize : 14,
	}
});