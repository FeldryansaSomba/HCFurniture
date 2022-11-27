import { StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import { IconSearch } from '../../../assets'
import { colors, heightMobileUI } from '../../../utils'
import { saveKeywordProduk } from '../../../actions/ProdukAction'
import { connect } from 'react-redux'
import { RFValue } from 'react-native-responsive-fontsize'

class SearchFilter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       search: ""
    }
  }

  selesaiCari = () => {
    const {dispatch} = this.props
    const {search} = this.state
    //jalankan action save keyword
    dispatch(saveKeywordProduk(search))

    //kembalikan state ke string kosong
    this.setState({
      search: ''
    })
  }
  render() {
    const {search} = this.state
    return (
      <View style={styles.wrapper}>
      <View style={styles.container}>
        <IconSearch/>
        <TextInput 
        placeholder='Cari produk anda. . .' 
        placeholderTextColor={colors.kedua}
        style={styles.input}
        value={search}
        onChangeText={(search) => this.setState({search})}
        onSubmitEditing={() => this.selesaiCari()}/>
      </View>
      </View>
    )
  }
}

export default connect()(SearchFilter)

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.kedua,
        paddingLeft: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        fontSize: RFValue(14, heightMobileUI),
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        color: colors.kedua,
        fontFamily: 'Montserrat-SemiBold',
        flex: 1
    }
})