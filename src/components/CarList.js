import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

import CarDetail from "./CarDetail";

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
                <CarDetail key={brand.model[0].id} brand={brand} />
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

