import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class CarList extends Component {
    constructor() {
        super();

        this.state = { carList: [] };
    }
    componentDidMount() {
        axios.get('https://www.btechwebtech.com/givecars.php')
        .then((response) => {
            //console.log(response);
            this.setState({carList: response.data});
        });
    }

    renderList = () => {
        return this.state.carList.map((brand) => {
            return (
                <View key={brand.model[0].id}>
                    <Text>{brand.model[0].name}</Text>
                </View>
            )
        })
    }
    render () {
        console.log(this.state);
        return (
            <View>
                {this.renderList()}
            </View>
            );
    }
}

export default CarList;

