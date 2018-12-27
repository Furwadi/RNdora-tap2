import React, { Component } from 'react';
import { AppRegistry, View, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Right, Body, Left } from 'native-base';


import styles from '../app/style'

var SoundPlayer = require('react-native-sound')

var la1 = null;
var la2 = null;
var la3 = null;
var aku = null;
var sayang = null;
var sekali = null;
var doraemon = null;

export default class HomeScreen extends Component {

    state= {
        value : 0
    }

    plus=() =>{
        let currentValue = this.state.value
        this.setState({ value : currentValue + 1 })
    }
    
    onPressbtn1() {
        la1 = new SoundPlayer('la1.mp3', SoundPlayer.MAIN_BUNDLE, (success) => {
            la1.play((success))
        })
        this.plus()
    }
    onPressbtn2() {
        la2 = new SoundPlayer('la2.mp3', SoundPlayer.MAIN_BUNDLE, (success) => {
            la2.play((success))
        })
        this.plus()
    }
    onPressbtn3() {
        la3 = new SoundPlayer('la3.mp3', SoundPlayer.MAIN_BUNDLE, (success) => {
            la3.play((success))
        })
        this.plus()  
    }
    onPressbtn4() {
        aku = new SoundPlayer('aku.mp3', SoundPlayer.MAIN_BUNDLE, (success) => {
            aku.play((success))
        })
        this.plus()  
    }
    onPressbtn5() {
        sayang = new SoundPlayer('sayang.mp3', SoundPlayer.MAIN_BUNDLE, (success) => {
            sayang.play((success))
        })
        this.plus()  
    }
    onPressbtn6() {
        sekali = new SoundPlayer('sekali.mp3', SoundPlayer.MAIN_BUNDLE, (success) => {
            sekali.play((success))
        })
        this.plus()  
    }
    onPressbtn7() {
        doraemon = new SoundPlayer('doraemon.mp3', SoundPlayer.MAIN_BUNDLE, (success) => {
            doraemon.play((success))
        })
        this.plus() 
    }
    
    
    
    
    
    static navigationOptions = {header: null}
    render() {
    return (
        <Container>
            <View style={{ flex: 1}}>
                <View style={{flex: 2, backgroundColor: 'powderblue'}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 3, backgroundColor: 'powderblue',}}>
                            <View style={{flex: 1, flexDirection:'row'}}>
                                <View style={{ flex: 7, justifyContent: 'center' }}>

                                        <Text style={styles.textHeader}>Rank 5000</Text>
                                        <View style={{ margin: 2, }}>
                                        <Button title="Leaderboard" color="#841584" onPress={() => this.props.navigation.navigate('Leaderboard')}  />
                                        </View>
                                    
                                </View>

                                <View style={{ flex: 3}}>
                                    <View style={styles.iconTrophy}>
                                        <Image source={require('../images/trophy1.png')} style={styles.imageHeader}/>
                                    </View>
                                </View>

                            </View>   
                        </View>
                        <View style={{flex: 3,}}>
                            <View style={{flex: 1, flexDirection:'row'}}>
                                <View style={{ flex: 7, justifyContent: 'center' }}>

                                        <Text style={styles.textHeader}>Guest 2001</Text>
                                        <View style={{ margin:2 }}>
                                        <Button title="Facebook" color="#3b5998" />
                                        </View>
                                    
                                </View>

                                <View style={{ flex: 3}}>
                                    <View style={styles.iconPeople}>
                                       
                                            <Image source={require('../images/people.png')} style={styles.imageHeader}/>
                                        
                                    </View>
                                </View>

                            </View>   
                        </View>
                    </View>
                </View>

                <View style={{flex: 9, backgroundColor: 'skyblue'}}>
                    
                    <View style={styles.viewCombos}>
                            <Text style={styles.numberCombos}>{this.state.value}</Text>
                            <Text>Combos!</Text>
                    </View>
                    <View style={styles.viewBody}>
                        <TouchableOpacity onPress={this.onPressbtn7.bind(this)} >
                            <Image source={require('../images/Doraemon.png')} style={styles.viewImageBody}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 3, backgroundColor: 'skyblue'}}>
                    <View style={styles.viewButton}>
                        <TouchableOpacity onPress={this.onPressbtn1.bind(this)} style={styles.btnLeftRight}>
                            <Text>BTN 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressbtn2.bind(this)} style={styles.btnCenter}>
                            <Text>BTN 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressbtn3.bind(this)} style={styles.btnLeftRight}>
                            <Text>BTN 3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', marginVertical:10,}}>
                        <TouchableOpacity onPress={this.onPressbtn4.bind(this)} style={styles.btnLeftRight}>
                            <Text>BTN 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressbtn5.bind(this)} style={styles.btnCenter}>
                            <Text>BTN 5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPressbtn6.bind(this)} style={styles.btnLeftRight}>
                            <Text>BTN 6</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
            </View>
      </Container>
    );
  }
};

