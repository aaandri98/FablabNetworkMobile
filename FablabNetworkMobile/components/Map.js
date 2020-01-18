import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {getFablab} from './webServices/getFablabs'

export default class Map extends React.Component {

    state = {
        fablabs: [],
        total: this.props.totalView,
        loading: true
    }

    componentDidMount() {

        if (typeof this.state.total !== 'undefined') {
            getFablab().then(response => {
                this.setState({
                    fablabs: response
                })
            }).then(() => this.setState({loading: false}))
        } else {
            this.setState({fablabs: [{coord: this.props.coord}], loading: false})
        }
    }

    render() {
        if (this.state.loading) {
            return <Text>loading</Text>;
        } else {
            return (
                <MapView style={styles.mapStyle} showsUserLocation={true} followsUserLocation={true}>
                    {(
                        this.state.fablabs.map(function (d, idx) {
                            return (
                                <Marker
                                    key={idx++}
                                    coordinate={{latitude: d.coord.lat, longitude: d.coord.lon}}
                                    title={d.name}
                                />
                            )
                        })
                    )}
                </MapView>
            );
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
