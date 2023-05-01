// @flow
import React, { useEffect } from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { theme } from '../../theme/styles.js'
import MapView, { Marker, Circle, Polygon } from 'react-native-maps'
import BackgroundGeolocation from 'react-native-background-geolocation'

// type Props = {
//   navigation: Object,
// }

export const MapWrapper = ({
  geoReady,
  geoEnabled,
  isLogging,
  coords,
  footprint,
  handleStart,
  handleStop,
  getLog,
}) => {
  const [follow, setFollow] = React.useState(true)
  const [speed, setSpeed] = React.useState(null)

  useEffect(() => {
    BackgroundGeolocation.watchPosition(
      location => {
        // console.log('[watchPosition] -', location)
        setSpeed(parseFloat(location.coords.speed * 1.609344).toFixed(2))
      },
      errorCode => {
        console.log('[watchPosition] ERROR -', errorCode)
      },
      {
        interval: 2000,
        desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
        persist: false,
        extras: { foo: 'bar' },
        timeout: 60000,
      },
    )
  }, [])

  const geometries = geoData.map((item) => item.geometry).flat()
  console.log(geometries)


  const formatted = geometries.map((geo) => {

    return geo.map((item) => ({
      latitude: item.lat,
      longitude: item.lng,
    }))
  })


  console.log(formatted)

  var worldCoords = [
    { latitude: -85.1054596961173, longitude: -180 },
    { latitude: 85.1054596961173, longitude: -180 },
    { latitude: 85.1054596961173, longitude: 180 },
    { latitude: -85.1054596961173, longitude: 180 },
    { latitude: -85.1054596961173, longitude: 0 },

  ];

  return (
    <View style={[styles.wrapper]}>
      <View style={styles.options}>
        {geoReady && (
          <>
            {geoEnabled ? (
              <Text onPress={handleStop}>Stop</Text>
            ) : (
              <Text onPress={handleStart}>Start</Text>
            )}
          </>
        )}
        <Text> {speed ?? ''} km/h</Text>
        <Text onPress={() => setFollow(!follow)}>
          {' '}
          {follow ? 'Pan' : 'Follow'}{' '}
        </Text>
        <Text onPress={getLog}>LOG</Text>

      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            longitude: coords?.longitude ?? 151.283519,
            latitude: coords?.latitude ?? -33.792554,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          coordinate={{
            latitude: -33.792554,
            longitude: 151.283519,
          }}
          followsUserLocation={follow}
          onPanDrag={() => {
            setFollow(false)
          }}
          showsUserLocation={true}
        >
          {/* {coords && (
            <Marker
              title="User Location"
              coordinate={{
                latitude: coords?.latitude,
                longitude: coords?.longitude,
              }}
            />
          )} */}
          {/* <Circle
            center={{ latitude: -33.802743, longitude: 151.2894 }}
            radius={1000}
          /> */}
          {/* {footprint.length > 0 &&
            footprint.map(location => (
              <Circle
                key={location.uuid}
                radius={15}
                strokeColor="rgba(255,0,0,0.9)"
                fillColor="rgba(255,0,0,0.5)"
                title="Footprint"
                center={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
              /> */}
          {/* ))} */}
          <Polygon
            coordinates={worldCoords}
            // holes={
            //   [formatted[0]]
            // }
            strokeColor='black'
            fillColor='rgba(55, 55, 55, 0.8)'
          />
          {/* {
            formatted.map((geo) => {
              return <Polygon
                coordinates={geo}
                strokeColor='black'
              />
            })
          } */}


          <Marker
            title="Manly Beach"
            coordinate={{ latitude: -33.794, longitude: 151.2878 }}
            onPress={data => {
              console.log('onMarkerPress', data.currentTarget)
            }}
          />
        </MapView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: '100%',
    backgroundColor: '#777',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(100,100,90,0.8)',
    padding: 10,
    zIndex: 1,
  },
})

const geoData = [
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "11",
    "quantity": 220,
    "geometry": [
      [
        {
          "lat": -33.802743,
          "lng": 151.2894
        },
        {
          "lat": -33.804886,
          "lng": 151.291115
        },
        {
          "lat": -33.802882,
          "lng": 151.292461
        },
        {
          "lat": -33.802794,
          "lng": 151.292388
        },
        {
          "lat": -33.802668,
          "lng": 151.292605
        },
        {
          "lat": -33.802511,
          "lng": 151.29271
        },
        {
          "lat": -33.802377,
          "lng": 151.292708
        },
        {
          "lat": -33.802314,
          "lng": 151.292699
        },
        {
          "lat": -33.802248,
          "lng": 151.292764
        },
        {
          "lat": -33.802194,
          "lng": 151.292808
        },
        {
          "lat": -33.802061,
          "lng": 151.292898
        },
        {
          "lat": -33.802009,
          "lng": 151.292932
        },
        {
          "lat": -33.802009,
          "lng": 151.292933
        },
        {
          "lat": -33.801931,
          "lng": 151.292986
        },
        {
          "lat": -33.802032,
          "lng": 151.29313
        },
        {
          "lat": -33.802054,
          "lng": 151.293442
        },
        {
          "lat": -33.80206,
          "lng": 151.293568
        },
        {
          "lat": -33.80204,
          "lng": 151.293681
        },
        {
          "lat": -33.801795,
          "lng": 151.295038
        },
        {
          "lat": -33.801808,
          "lng": 151.296082
        },
        {
          "lat": -33.801934,
          "lng": 151.296755
        },
        {
          "lat": -33.802754,
          "lng": 151.296604
        },
        {
          "lat": -33.802981,
          "lng": 151.296886
        },
        {
          "lat": -33.80297,
          "lng": 151.296896
        },
        {
          "lat": -33.803519,
          "lng": 151.297563
        },
        {
          "lat": -33.803568,
          "lng": 151.297633
        },
        {
          "lat": -33.801956,
          "lng": 151.299531
        },
        {
          "lat": -33.801873,
          "lng": 151.299507
        },
        {
          "lat": -33.801663,
          "lng": 151.299755
        },
        {
          "lat": -33.801509,
          "lng": 151.299515
        },
        {
          "lat": -33.801359,
          "lng": 151.299108
        },
        {
          "lat": -33.801151,
          "lng": 151.298533
        },
        {
          "lat": -33.801111,
          "lng": 151.298396
        },
        {
          "lat": -33.801226,
          "lng": 151.298339
        },
        {
          "lat": -33.801181,
          "lng": 151.298216
        },
        {
          "lat": -33.801557,
          "lng": 151.298141
        },
        {
          "lat": -33.801933,
          "lng": 151.297809
        },
        {
          "lat": -33.802045,
          "lng": 151.297709
        },
        {
          "lat": -33.802197,
          "lng": 151.298117
        },
        {
          "lat": -33.802226,
          "lng": 151.298224
        },
        {
          "lat": -33.802342,
          "lng": 151.298117
        },
        {
          "lat": -33.802679,
          "lng": 151.297745
        },
        {
          "lat": -33.802733,
          "lng": 151.297656
        },
        {
          "lat": -33.802757,
          "lng": 151.297568
        },
        {
          "lat": -33.802758,
          "lng": 151.297447
        },
        {
          "lat": -33.802733,
          "lng": 151.297347
        },
        {
          "lat": -33.802696,
          "lng": 151.297268
        },
        {
          "lat": -33.802625,
          "lng": 151.297204
        },
        {
          "lat": -33.802548,
          "lng": 151.297162
        },
        {
          "lat": -33.80247,
          "lng": 151.297155
        },
        {
          "lat": -33.80241,
          "lng": 151.297169
        },
        {
          "lat": -33.80233,
          "lng": 151.297203
        },
        {
          "lat": -33.802111,
          "lng": 151.297341
        },
        {
          "lat": -33.802042,
          "lng": 151.297385
        },
        {
          "lat": -33.801943,
          "lng": 151.297423
        },
        {
          "lat": -33.801988,
          "lng": 151.297496
        },
        {
          "lat": -33.801583,
          "lng": 151.297864
        },
        {
          "lat": -33.800991,
          "lng": 151.297984
        },
        {
          "lat": -33.800957,
          "lng": 151.297869
        },
        {
          "lat": -33.800967,
          "lng": 151.297458
        },
        {
          "lat": -33.800876,
          "lng": 151.297342
        },
        {
          "lat": -33.800717,
          "lng": 151.29625
        },
        {
          "lat": -33.800745,
          "lng": 151.295118
        },
        {
          "lat": -33.800902,
          "lng": 151.294035
        },
        {
          "lat": -33.800612,
          "lng": 151.293278
        },
        {
          "lat": -33.800991,
          "lng": 151.292445
        },
        {
          "lat": -33.802743,
          "lng": 151.2894
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801009,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "11",
        "quantity": 220,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": true
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "10",
    "quantity": 180,
    "geometry": [
      [
        {
          "lat": -33.80173,
          "lng": 151.286934
        },
        {
          "lat": -33.801731,
          "lng": 151.286935
        },
        {
          "lat": -33.801983,
          "lng": 151.287087
        },
        {
          "lat": -33.802011,
          "lng": 151.287096
        },
        {
          "lat": -33.802051,
          "lng": 151.28712
        },
        {
          "lat": -33.80206,
          "lng": 151.287112
        },
        {
          "lat": -33.802065,
          "lng": 151.287113
        },
        {
          "lat": -33.802137,
          "lng": 151.287084
        },
        {
          "lat": -33.802247,
          "lng": 151.286948
        },
        {
          "lat": -33.802304,
          "lng": 151.286879
        },
        {
          "lat": -33.8025,
          "lng": 151.286626
        },
        {
          "lat": -33.802606,
          "lng": 151.286476
        },
        {
          "lat": -33.802887,
          "lng": 151.286062
        },
        {
          "lat": -33.803598,
          "lng": 151.285146
        },
        {
          "lat": -33.803561,
          "lng": 151.284989
        },
        {
          "lat": -33.803344,
          "lng": 151.28482
        },
        {
          "lat": -33.803271,
          "lng": 151.284885
        },
        {
          "lat": -33.803251,
          "lng": 151.284786
        },
        {
          "lat": -33.803566,
          "lng": 151.284797
        },
        {
          "lat": -33.805481,
          "lng": 151.28337
        },
        {
          "lat": -33.806082,
          "lng": 151.283127
        },
        {
          "lat": -33.806383,
          "lng": 151.283132
        },
        {
          "lat": -33.806972,
          "lng": 151.283408
        },
        {
          "lat": -33.807374,
          "lng": 151.283468
        },
        {
          "lat": -33.807616,
          "lng": 151.28336
        },
        {
          "lat": -33.808228,
          "lng": 151.282575
        },
        {
          "lat": -33.808637,
          "lng": 151.282681
        },
        {
          "lat": -33.808602,
          "lng": 151.282783
        },
        {
          "lat": -33.80857,
          "lng": 151.28283
        },
        {
          "lat": -33.808578,
          "lng": 151.282828
        },
        {
          "lat": -33.80834,
          "lng": 151.283205
        },
        {
          "lat": -33.807948,
          "lng": 151.28355
        },
        {
          "lat": -33.806905,
          "lng": 151.283877
        },
        {
          "lat": -33.806327,
          "lng": 151.284168
        },
        {
          "lat": -33.805959,
          "lng": 151.284538
        },
        {
          "lat": -33.804673,
          "lng": 151.286027
        },
        {
          "lat": -33.802743,
          "lng": 151.2894
        },
        {
          "lat": -33.801164,
          "lng": 151.288009
        },
        {
          "lat": -33.80173,
          "lng": 151.286934
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801008,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "10",
        "quantity": 180,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": false
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "02",
    "quantity": 200,
    "geometry": [
      [
        {
          "lat": -33.790829,
          "lng": 151.281045
        },
        {
          "lat": -33.792004,
          "lng": 151.281222
        },
        {
          "lat": -33.794808,
          "lng": 151.280621
        },
        {
          "lat": -33.794906,
          "lng": 151.281168
        },
        {
          "lat": -33.794997,
          "lng": 151.281734
        },
        {
          "lat": -33.79508,
          "lng": 151.282254
        },
        {
          "lat": -33.79516,
          "lng": 151.282767
        },
        {
          "lat": -33.795252,
          "lng": 151.283353
        },
        {
          "lat": -33.795338,
          "lng": 151.283904
        },
        {
          "lat": -33.793015,
          "lng": 151.284367
        },
        {
          "lat": -33.792892,
          "lng": 151.284345
        },
        {
          "lat": -33.792766,
          "lng": 151.284295
        },
        {
          "lat": -33.792166,
          "lng": 151.283848
        },
        {
          "lat": -33.791585,
          "lng": 151.283361
        },
        {
          "lat": -33.790929,
          "lng": 151.282872
        },
        {
          "lat": -33.790672,
          "lng": 151.282805
        },
        {
          "lat": -33.790431,
          "lng": 151.280931
        },
        {
          "lat": -33.790829,
          "lng": 151.281045
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801005,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "02",
        "quantity": 200,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": false
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "12",
    "quantity": 208,
    "geometry": [
      [
        {
          "lat": -33.792469,
          "lng": 151.284534
        },
        {
          "lat": -33.792476,
          "lng": 151.284522
        },
        {
          "lat": -33.792816,
          "lng": 151.284694
        },
        {
          "lat": -33.793129,
          "lng": 151.284857
        },
        {
          "lat": -33.793295,
          "lng": 151.284941
        },
        {
          "lat": -33.793374,
          "lng": 151.284964
        },
        {
          "lat": -33.793479,
          "lng": 151.284954
        },
        {
          "lat": -33.793666,
          "lng": 151.284915
        },
        {
          "lat": -33.793838,
          "lng": 151.284788
        },
        {
          "lat": -33.794146,
          "lng": 151.28456
        },
        {
          "lat": -33.79433,
          "lng": 151.28459
        },
        {
          "lat": -33.79466,
          "lng": 151.284682
        },
        {
          "lat": -33.794732,
          "lng": 151.284682
        },
        {
          "lat": -33.794798,
          "lng": 151.284666
        },
        {
          "lat": -33.794846,
          "lng": 151.28464
        },
        {
          "lat": -33.795403,
          "lng": 151.284337
        },
        {
          "lat": -33.795535,
          "lng": 151.285196
        },
        {
          "lat": -33.795717,
          "lng": 151.285235
        },
        {
          "lat": -33.795773,
          "lng": 151.285238
        },
        {
          "lat": -33.795884,
          "lng": 151.285227
        },
        {
          "lat": -33.795971,
          "lng": 151.285212
        },
        {
          "lat": -33.796853,
          "lng": 151.285005
        },
        {
          "lat": -33.797287,
          "lng": 151.287571
        },
        {
          "lat": -33.797314,
          "lng": 151.287746
        },
        {
          "lat": -33.797136,
          "lng": 151.288044
        },
        {
          "lat": -33.797045,
          "lng": 151.287986
        },
        {
          "lat": -33.796317,
          "lng": 151.28772
        },
        {
          "lat": -33.7959,
          "lng": 151.287559
        },
        {
          "lat": -33.794636,
          "lng": 151.28717
        },
        {
          "lat": -33.794089,
          "lng": 151.286998
        },
        {
          "lat": -33.79376,
          "lng": 151.28693
        },
        {
          "lat": -33.793481,
          "lng": 151.286961
        },
        {
          "lat": -33.792813,
          "lng": 151.286975
        },
        {
          "lat": -33.792375,
          "lng": 151.284451
        },
        {
          "lat": -33.792469,
          "lng": 151.284534
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801003,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "12",
        "quantity": 208,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": false
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "01",
    "quantity": 423,
    "geometry": [
      [
        {
          "lat": -33.790315,
          "lng": 151.280111
        },
        {
          "lat": -33.790392,
          "lng": 151.280689
        },
        {
          "lat": -33.790421,
          "lng": 151.280928
        },
        {
          "lat": -33.790423,
          "lng": 151.280929
        },
        {
          "lat": -33.790687,
          "lng": 151.282926
        },
        {
          "lat": -33.790852,
          "lng": 151.283224
        },
        {
          "lat": -33.790856,
          "lng": 151.283227
        },
        {
          "lat": -33.790885,
          "lng": 151.283998
        },
        {
          "lat": -33.790551,
          "lng": 151.284078
        },
        {
          "lat": -33.790648,
          "lng": 151.28514
        },
        {
          "lat": -33.788548,
          "lng": 151.284651
        },
        {
          "lat": -33.788453,
          "lng": 151.283923
        },
        {
          "lat": -33.787972,
          "lng": 151.284356
        },
        {
          "lat": -33.787847,
          "lng": 151.284488
        },
        {
          "lat": -33.787825,
          "lng": 151.284483
        },
        {
          "lat": -33.787095,
          "lng": 151.285199
        },
        {
          "lat": -33.787096,
          "lng": 151.2855
        },
        {
          "lat": -33.78708,
          "lng": 151.285412
        },
        {
          "lat": -33.787025,
          "lng": 151.285316
        },
        {
          "lat": -33.786985,
          "lng": 151.285267
        },
        {
          "lat": -33.786432,
          "lng": 151.284323
        },
        {
          "lat": -33.786366,
          "lng": 151.284409
        },
        {
          "lat": -33.786142,
          "lng": 151.284598
        },
        {
          "lat": -33.785841,
          "lng": 151.284853
        },
        {
          "lat": -33.786704,
          "lng": 151.286315
        },
        {
          "lat": -33.785992,
          "lng": 151.28746
        },
        {
          "lat": -33.785987,
          "lng": 151.287458
        },
        {
          "lat": -33.785946,
          "lng": 151.287454
        },
        {
          "lat": -33.785897,
          "lng": 151.287461
        },
        {
          "lat": -33.785853,
          "lng": 151.287479
        },
        {
          "lat": -33.785664,
          "lng": 151.28716
        },
        {
          "lat": -33.785668,
          "lng": 151.287054
        },
        {
          "lat": -33.785928,
          "lng": 151.286637
        },
        {
          "lat": -33.785931,
          "lng": 151.286574
        },
        {
          "lat": -33.785923,
          "lng": 151.2865
        },
        {
          "lat": -33.785672,
          "lng": 151.286073
        },
        {
          "lat": -33.785597,
          "lng": 151.285794
        },
        {
          "lat": -33.785669,
          "lng": 151.285695
        },
        {
          "lat": -33.785583,
          "lng": 151.28536
        },
        {
          "lat": -33.785541,
          "lng": 151.285193
        },
        {
          "lat": -33.7855,
          "lng": 151.285033
        },
        {
          "lat": -33.785338,
          "lng": 151.28476
        },
        {
          "lat": -33.785252,
          "lng": 151.284615
        },
        {
          "lat": -33.785094,
          "lng": 151.283478
        },
        {
          "lat": -33.785242,
          "lng": 151.283028
        },
        {
          "lat": -33.785414,
          "lng": 151.282502
        },
        {
          "lat": -33.785407,
          "lng": 151.282282
        },
        {
          "lat": -33.785385,
          "lng": 151.281684
        },
        {
          "lat": -33.785375,
          "lng": 151.281375
        },
        {
          "lat": -33.785368,
          "lng": 151.281211
        },
        {
          "lat": -33.785341,
          "lng": 151.281087
        },
        {
          "lat": -33.785635,
          "lng": 151.281042
        },
        {
          "lat": -33.785736,
          "lng": 151.281026
        },
        {
          "lat": -33.786491,
          "lng": 151.280947
        },
        {
          "lat": -33.7865,
          "lng": 151.280935
        },
        {
          "lat": -33.786513,
          "lng": 151.280934
        },
        {
          "lat": -33.786636,
          "lng": 151.280985
        },
        {
          "lat": -33.78665,
          "lng": 151.280883
        },
        {
          "lat": -33.78666,
          "lng": 151.280879
        },
        {
          "lat": -33.786694,
          "lng": 151.280897
        },
        {
          "lat": -33.788881,
          "lng": 151.280418
        },
        {
          "lat": -33.788909,
          "lng": 151.280427
        },
        {
          "lat": -33.789457,
          "lng": 151.280322
        },
        {
          "lat": -33.789585,
          "lng": 151.280287
        },
        {
          "lat": -33.789619,
          "lng": 151.280265
        },
        {
          "lat": -33.789625,
          "lng": 151.280254
        },
        {
          "lat": -33.790166,
          "lng": 151.280141
        },
        {
          "lat": -33.790315,
          "lng": 151.280111
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801004,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "01",
        "quantity": 423,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": false
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "04",
    "quantity": 300,
    "geometry": [
      [
        {
          "lat": -33.808578,
          "lng": 151.282828
        },
        {
          "lat": -33.808589,
          "lng": 151.282825
        },
        {
          "lat": -33.808612,
          "lng": 151.282816
        },
        {
          "lat": -33.80863,
          "lng": 151.282806
        },
        {
          "lat": -33.808644,
          "lng": 151.282794
        },
        {
          "lat": -33.808663,
          "lng": 151.2828
        },
        {
          "lat": -33.808686,
          "lng": 151.28279
        },
        {
          "lat": -33.808705,
          "lng": 151.282775
        },
        {
          "lat": -33.80874,
          "lng": 151.282757
        },
        {
          "lat": -33.808768,
          "lng": 151.282758
        },
        {
          "lat": -33.808803,
          "lng": 151.282772
        },
        {
          "lat": -33.808814,
          "lng": 151.282789
        },
        {
          "lat": -33.80882,
          "lng": 151.282813
        },
        {
          "lat": -33.808833,
          "lng": 151.282822
        },
        {
          "lat": -33.80886,
          "lng": 151.282816
        },
        {
          "lat": -33.808871,
          "lng": 151.282789
        },
        {
          "lat": -33.808878,
          "lng": 151.282763
        },
        {
          "lat": -33.808883,
          "lng": 151.282749
        },
        {
          "lat": -33.808906,
          "lng": 151.282749
        },
        {
          "lat": -33.808941,
          "lng": 151.282759
        },
        {
          "lat": -33.808955,
          "lng": 151.28277
        },
        {
          "lat": -33.808978,
          "lng": 151.282799
        },
        {
          "lat": -33.808985,
          "lng": 151.282829
        },
        {
          "lat": -33.80898,
          "lng": 151.28285
        },
        {
          "lat": -33.808953,
          "lng": 151.282879
        },
        {
          "lat": -33.808921,
          "lng": 151.282903
        },
        {
          "lat": -33.808897,
          "lng": 151.282936
        },
        {
          "lat": -33.808879,
          "lng": 151.282992
        },
        {
          "lat": -33.808874,
          "lng": 151.28305
        },
        {
          "lat": -33.808871,
          "lng": 151.283128
        },
        {
          "lat": -33.808881,
          "lng": 151.283169
        },
        {
          "lat": -33.808888,
          "lng": 151.283215
        },
        {
          "lat": -33.808891,
          "lng": 151.283255
        },
        {
          "lat": -33.808891,
          "lng": 151.283268
        },
        {
          "lat": -33.808306,
          "lng": 151.283345
        },
        {
          "lat": -33.808366,
          "lng": 151.283433
        },
        {
          "lat": -33.808844,
          "lng": 151.283842
        },
        {
          "lat": -33.808875,
          "lng": 151.283809
        },
        {
          "lat": -33.808905,
          "lng": 151.283774
        },
        {
          "lat": -33.808934,
          "lng": 151.283738
        },
        {
          "lat": -33.808976,
          "lng": 151.283683
        },
        {
          "lat": -33.808995,
          "lng": 151.283655
        },
        {
          "lat": -33.809012,
          "lng": 151.283625
        },
        {
          "lat": -33.809025,
          "lng": 151.283593
        },
        {
          "lat": -33.809032,
          "lng": 151.283552
        },
        {
          "lat": -33.809033,
          "lng": 151.283508
        },
        {
          "lat": -33.80903,
          "lng": 151.283453
        },
        {
          "lat": -33.809036,
          "lng": 151.283448
        },
        {
          "lat": -33.809043,
          "lng": 151.283439
        },
        {
          "lat": -33.809052,
          "lng": 151.283432
        },
        {
          "lat": -33.809055,
          "lng": 151.283412
        },
        {
          "lat": -33.809051,
          "lng": 151.283395
        },
        {
          "lat": -33.809041,
          "lng": 151.283377
        },
        {
          "lat": -33.809028,
          "lng": 151.283368
        },
        {
          "lat": -33.809013,
          "lng": 151.283364
        },
        {
          "lat": -33.809001,
          "lng": 151.283364
        },
        {
          "lat": -33.808996,
          "lng": 151.283358
        },
        {
          "lat": -33.80899,
          "lng": 151.283351
        },
        {
          "lat": -33.808988,
          "lng": 151.283337
        },
        {
          "lat": -33.808997,
          "lng": 151.283317
        },
        {
          "lat": -33.809001,
          "lng": 151.283297
        },
        {
          "lat": -33.809004,
          "lng": 151.283277
        },
        {
          "lat": -33.809011,
          "lng": 151.283268
        },
        {
          "lat": -33.809017,
          "lng": 151.283253
        },
        {
          "lat": -33.809002,
          "lng": 151.283236
        },
        {
          "lat": -33.809003,
          "lng": 151.283192
        },
        {
          "lat": -33.809005,
          "lng": 151.283148
        },
        {
          "lat": -33.809018,
          "lng": 151.283075
        },
        {
          "lat": -33.809029,
          "lng": 151.283039
        },
        {
          "lat": -33.809041,
          "lng": 151.283004
        },
        {
          "lat": -33.809056,
          "lng": 151.282972
        },
        {
          "lat": -33.809073,
          "lng": 151.282944
        },
        {
          "lat": -33.809094,
          "lng": 151.282918
        },
        {
          "lat": -33.80916,
          "lng": 151.282843
        },
        {
          "lat": -33.809187,
          "lng": 151.282814
        },
        {
          "lat": -33.809217,
          "lng": 151.282786
        },
        {
          "lat": -33.809246,
          "lng": 151.282757
        },
        {
          "lat": -33.809268,
          "lng": 151.282728
        },
        {
          "lat": -33.809278,
          "lng": 151.282697
        },
        {
          "lat": -33.809276,
          "lng": 151.282671
        },
        {
          "lat": -33.809271,
          "lng": 151.282644
        },
        {
          "lat": -33.809261,
          "lng": 151.282617
        },
        {
          "lat": -33.80925,
          "lng": 151.282592
        },
        {
          "lat": -33.809245,
          "lng": 151.282584
        },
        {
          "lat": -33.80931,
          "lng": 151.282572
        },
        {
          "lat": -33.809384,
          "lng": 151.282759
        },
        {
          "lat": -33.809237,
          "lng": 151.283516
        },
        {
          "lat": -33.809097,
          "lng": 151.283759
        },
        {
          "lat": -33.808575,
          "lng": 151.284318
        },
        {
          "lat": -33.806706,
          "lng": 151.285915
        },
        {
          "lat": -33.806713,
          "lng": 151.286446
        },
        {
          "lat": -33.807219,
          "lng": 151.287204
        },
        {
          "lat": -33.807213,
          "lng": 151.287211
        },
        {
          "lat": -33.807179,
          "lng": 151.287252
        },
        {
          "lat": -33.807161,
          "lng": 151.287272
        },
        {
          "lat": -33.807141,
          "lng": 151.287287
        },
        {
          "lat": -33.807124,
          "lng": 151.287298
        },
        {
          "lat": -33.807088,
          "lng": 151.287314
        },
        {
          "lat": -33.807035,
          "lng": 151.287331
        },
        {
          "lat": -33.807003,
          "lng": 151.28734
        },
        {
          "lat": -33.806972,
          "lng": 151.287342
        },
        {
          "lat": -33.806947,
          "lng": 151.287335
        },
        {
          "lat": -33.806923,
          "lng": 151.287321
        },
        {
          "lat": -33.806899,
          "lng": 151.287301
        },
        {
          "lat": -33.806876,
          "lng": 151.287279
        },
        {
          "lat": -33.806855,
          "lng": 151.287257
        },
        {
          "lat": -33.806838,
          "lng": 151.287236
        },
        {
          "lat": -33.806823,
          "lng": 151.287214
        },
        {
          "lat": -33.80676,
          "lng": 151.287106
        },
        {
          "lat": -33.806722,
          "lng": 151.287031
        },
        {
          "lat": -33.806704,
          "lng": 151.286993
        },
        {
          "lat": -33.806687,
          "lng": 151.286954
        },
        {
          "lat": -33.806642,
          "lng": 151.286833
        },
        {
          "lat": -33.806612,
          "lng": 151.286734
        },
        {
          "lat": -33.806599,
          "lng": 151.286744
        },
        {
          "lat": -33.806288,
          "lng": 151.28727
        },
        {
          "lat": -33.806318,
          "lng": 151.287425
        },
        {
          "lat": -33.807278,
          "lng": 151.288219
        },
        {
          "lat": -33.808011,
          "lng": 151.288846
        },
        {
          "lat": -33.808069,
          "lng": 151.288894
        },
        {
          "lat": -33.804886,
          "lng": 151.291115
        },
        {
          "lat": -33.802743,
          "lng": 151.2894
        },
        {
          "lat": -33.804673,
          "lng": 151.286027
        },
        {
          "lat": -33.805959,
          "lng": 151.284538
        },
        {
          "lat": -33.806327,
          "lng": 151.284168
        },
        {
          "lat": -33.806905,
          "lng": 151.283877
        },
        {
          "lat": -33.807948,
          "lng": 151.28355
        },
        {
          "lat": -33.80834,
          "lng": 151.283205
        },
        {
          "lat": -33.808578,
          "lng": 151.282828
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801011,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "04",
        "quantity": 300,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": true
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "03",
    "quantity": 200,
    "geometry": [
      [
        {
          "lat": -33.797479,
          "lng": 151.280607
        },
        {
          "lat": -33.797845,
          "lng": 151.282634
        },
        {
          "lat": -33.798373,
          "lng": 151.282491
        },
        {
          "lat": -33.799173,
          "lng": 151.282274
        },
        {
          "lat": -33.799614,
          "lng": 151.283669
        },
        {
          "lat": -33.799054,
          "lng": 151.284662
        },
        {
          "lat": -33.798802,
          "lng": 151.285108
        },
        {
          "lat": -33.797316,
          "lng": 151.287742
        },
        {
          "lat": -33.796811,
          "lng": 151.284756
        },
        {
          "lat": -33.796212,
          "lng": 151.281072
        },
        {
          "lat": -33.796214,
          "lng": 151.281072
        },
        {
          "lat": -33.796179,
          "lng": 151.280868
        },
        {
          "lat": -33.797479,
          "lng": 151.280607
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801010,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "03",
        "quantity": 200,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": false
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "05",
    "quantity": 180,
    "geometry": [
      [
        {
          "lat": -33.801164,
          "lng": 151.288009
        },
        {
          "lat": -33.802743,
          "lng": 151.2894
        },
        {
          "lat": -33.800991,
          "lng": 151.292445
        },
        {
          "lat": -33.800612,
          "lng": 151.293278
        },
        {
          "lat": -33.800409,
          "lng": 151.293126
        },
        {
          "lat": -33.800407,
          "lng": 151.293055
        },
        {
          "lat": -33.800123,
          "lng": 151.292737
        },
        {
          "lat": -33.799953,
          "lng": 151.292552
        },
        {
          "lat": -33.799894,
          "lng": 151.292493
        },
        {
          "lat": -33.799684,
          "lng": 151.292281
        },
        {
          "lat": -33.799489,
          "lng": 151.292084
        },
        {
          "lat": -33.799316,
          "lng": 151.291909
        },
        {
          "lat": -33.799232,
          "lng": 151.291683
        },
        {
          "lat": -33.799465,
          "lng": 151.291145
        },
        {
          "lat": -33.799623,
          "lng": 151.290907
        },
        {
          "lat": -33.799767,
          "lng": 151.290677
        },
        {
          "lat": -33.799824,
          "lng": 151.290649
        },
        {
          "lat": -33.799841,
          "lng": 151.290501
        },
        {
          "lat": -33.799801,
          "lng": 151.290468
        },
        {
          "lat": -33.799894,
          "lng": 151.290305
        },
        {
          "lat": -33.7999,
          "lng": 151.290137
        },
        {
          "lat": -33.799868,
          "lng": 151.290148
        },
        {
          "lat": -33.801164,
          "lng": 151.288009
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801001,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "05",
        "quantity": 180,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": false
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "08",
    "quantity": 200,
    "geometry": [
      [
        {
          "lat": -33.79974,
          "lng": 151.275595
        },
        {
          "lat": -33.799776,
          "lng": 151.275641
        },
        {
          "lat": -33.799855,
          "lng": 151.275739
        },
        {
          "lat": -33.799899,
          "lng": 151.275773
        },
        {
          "lat": -33.800252,
          "lng": 151.276041
        },
        {
          "lat": -33.800258,
          "lng": 151.276086
        },
        {
          "lat": -33.800163,
          "lng": 151.276314
        },
        {
          "lat": -33.800094,
          "lng": 151.276519
        },
        {
          "lat": -33.800074,
          "lng": 151.276585
        },
        {
          "lat": -33.800061,
          "lng": 151.276651
        },
        {
          "lat": -33.799998,
          "lng": 151.276885
        },
        {
          "lat": -33.799921,
          "lng": 151.277015
        },
        {
          "lat": -33.79987,
          "lng": 151.277116
        },
        {
          "lat": -33.799822,
          "lng": 151.277194
        },
        {
          "lat": -33.799784,
          "lng": 151.277248
        },
        {
          "lat": -33.799685,
          "lng": 151.277261
        },
        {
          "lat": -33.799401,
          "lng": 151.277621
        },
        {
          "lat": -33.799364,
          "lng": 151.277663
        },
        {
          "lat": -33.799324,
          "lng": 151.27775
        },
        {
          "lat": -33.799287,
          "lng": 151.27784
        },
        {
          "lat": -33.799253,
          "lng": 151.277931
        },
        {
          "lat": -33.799226,
          "lng": 151.278025
        },
        {
          "lat": -33.799215,
          "lng": 151.278089
        },
        {
          "lat": -33.799198,
          "lng": 151.278235
        },
        {
          "lat": -33.799187,
          "lng": 151.278266
        },
        {
          "lat": -33.79917,
          "lng": 151.278397
        },
        {
          "lat": -33.798849,
          "lng": 151.27846
        },
        {
          "lat": -33.798746,
          "lng": 151.278479
        },
        {
          "lat": -33.799349,
          "lng": 151.279661
        },
        {
          "lat": -33.79944,
          "lng": 151.279865
        },
        {
          "lat": -33.799467,
          "lng": 151.279935
        },
        {
          "lat": -33.799464,
          "lng": 151.280023
        },
        {
          "lat": -33.799444,
          "lng": 151.280154
        },
        {
          "lat": -33.799379,
          "lng": 151.280291
        },
        {
          "lat": -33.799271,
          "lng": 151.280401
        },
        {
          "lat": -33.799128,
          "lng": 151.280486
        },
        {
          "lat": -33.798321,
          "lng": 151.280927
        },
        {
          "lat": -33.798199,
          "lng": 151.281113
        },
        {
          "lat": -33.798205,
          "lng": 151.281155
        },
        {
          "lat": -33.798201,
          "lng": 151.281187
        },
        {
          "lat": -33.798227,
          "lng": 151.281463
        },
        {
          "lat": -33.798231,
          "lng": 151.281508
        },
        {
          "lat": -33.798327,
          "lng": 151.282261
        },
        {
          "lat": -33.798339,
          "lng": 151.282357
        },
        {
          "lat": -33.798373,
          "lng": 151.282491
        },
        {
          "lat": -33.797845,
          "lng": 151.282634
        },
        {
          "lat": -33.797479,
          "lng": 151.280607
        },
        {
          "lat": -33.796179,
          "lng": 151.280868
        },
        {
          "lat": -33.796092,
          "lng": 151.280345
        },
        {
          "lat": -33.796054,
          "lng": 151.280102
        },
        {
          "lat": -33.797888,
          "lng": 151.279708
        },
        {
          "lat": -33.79775,
          "lng": 151.279324
        },
        {
          "lat": -33.797477,
          "lng": 151.278065
        },
        {
          "lat": -33.797164,
          "lng": 151.276169
        },
        {
          "lat": -33.799263,
          "lng": 151.275737
        },
        {
          "lat": -33.79974,
          "lng": 151.275595
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801006,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "08",
        "quantity": 200,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": true
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "07",
    "quantity": 389,
    "geometry": [
      [
        {
          "lat": -33.790856,
          "lng": 151.283227
        },
        {
          "lat": -33.791432,
          "lng": 151.283694
        },
        {
          "lat": -33.791488,
          "lng": 151.283868
        },
        {
          "lat": -33.791541,
          "lng": 151.284037
        },
        {
          "lat": -33.792019,
          "lng": 151.284334
        },
        {
          "lat": -33.792359,
          "lng": 151.284437
        },
        {
          "lat": -33.792375,
          "lng": 151.284451
        },
        {
          "lat": -33.792813,
          "lng": 151.286975
        },
        {
          "lat": -33.79283,
          "lng": 151.286975
        },
        {
          "lat": -33.792166,
          "lng": 151.286989
        },
        {
          "lat": -33.79145,
          "lng": 151.287004
        },
        {
          "lat": -33.791099,
          "lng": 151.287014
        },
        {
          "lat": -33.790832,
          "lng": 151.287017
        },
        {
          "lat": -33.79083,
          "lng": 151.287017
        },
        {
          "lat": -33.789938,
          "lng": 151.28702
        },
        {
          "lat": -33.789751,
          "lng": 151.287021
        },
        {
          "lat": -33.789211,
          "lng": 151.287101
        },
        {
          "lat": -33.78894,
          "lng": 151.287142
        },
        {
          "lat": -33.788637,
          "lng": 151.287235
        },
        {
          "lat": -33.788522,
          "lng": 151.287271
        },
        {
          "lat": -33.78845,
          "lng": 151.287301
        },
        {
          "lat": -33.788102,
          "lng": 151.287452
        },
        {
          "lat": -33.787707,
          "lng": 151.287646
        },
        {
          "lat": -33.787377,
          "lng": 151.287734
        },
        {
          "lat": -33.786933,
          "lng": 151.287846
        },
        {
          "lat": -33.786884,
          "lng": 151.287851
        },
        {
          "lat": -33.78683,
          "lng": 151.287846
        },
        {
          "lat": -33.786776,
          "lng": 151.287829
        },
        {
          "lat": -33.786668,
          "lng": 151.287774
        },
        {
          "lat": -33.786425,
          "lng": 151.287655
        },
        {
          "lat": -33.786075,
          "lng": 151.287485
        },
        {
          "lat": -33.785992,
          "lng": 151.28746
        },
        {
          "lat": -33.786704,
          "lng": 151.286315
        },
        {
          "lat": -33.786708,
          "lng": 151.286322
        },
        {
          "lat": -33.787095,
          "lng": 151.285691
        },
        {
          "lat": -33.787114,
          "lng": 151.285604
        },
        {
          "lat": -33.787096,
          "lng": 151.2855
        },
        {
          "lat": -33.787095,
          "lng": 151.285199
        },
        {
          "lat": -33.787825,
          "lng": 151.284483
        },
        {
          "lat": -33.787847,
          "lng": 151.284488
        },
        {
          "lat": -33.78784,
          "lng": 151.284495
        },
        {
          "lat": -33.78855,
          "lng": 151.284663
        },
        {
          "lat": -33.788548,
          "lng": 151.284651
        },
        {
          "lat": -33.790648,
          "lng": 151.28514
        },
        {
          "lat": -33.790551,
          "lng": 151.284078
        },
        {
          "lat": -33.790885,
          "lng": 151.283998
        },
        {
          "lat": -33.790856,
          "lng": 151.283227
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801002,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "07",
        "quantity": 389,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": false
  },
  {
    "postzoneGroupId": "A ",
    "postzoneId": "2095  ",
    "sectionId": "09",
    "quantity": 233,
    "geometry": [
      [
        {
          "lat": -33.799054,
          "lng": 151.284662
        },
        {
          "lat": -33.799147,
          "lng": 151.284513
        },
        {
          "lat": -33.799224,
          "lng": 151.284376
        },
        {
          "lat": -33.79925,
          "lng": 151.284484
        },
        {
          "lat": -33.799715,
          "lng": 151.28528
        },
        {
          "lat": -33.799894,
          "lng": 151.285545
        },
        {
          "lat": -33.799974,
          "lng": 151.285662
        },
        {
          "lat": -33.800157,
          "lng": 151.285871
        },
        {
          "lat": -33.80025,
          "lng": 151.285961
        },
        {
          "lat": -33.800346,
          "lng": 151.286053
        },
        {
          "lat": -33.80058,
          "lng": 151.286234
        },
        {
          "lat": -33.800747,
          "lng": 151.286349
        },
        {
          "lat": -33.800874,
          "lng": 151.286436
        },
        {
          "lat": -33.801252,
          "lng": 151.286657
        },
        {
          "lat": -33.80173,
          "lng": 151.286934
        },
        {
          "lat": -33.801164,
          "lng": 151.288009
        },
        {
          "lat": -33.799868,
          "lng": 151.290148
        },
        {
          "lat": -33.799853,
          "lng": 151.290154
        },
        {
          "lat": -33.799799,
          "lng": 151.290135
        },
        {
          "lat": -33.799134,
          "lng": 151.289397
        },
        {
          "lat": -33.799045,
          "lng": 151.289296
        },
        {
          "lat": -33.79895,
          "lng": 151.289214
        },
        {
          "lat": -33.79855,
          "lng": 151.288946
        },
        {
          "lat": -33.798612,
          "lng": 151.288849
        },
        {
          "lat": -33.798859,
          "lng": 151.288428
        },
        {
          "lat": -33.798505,
          "lng": 151.288137
        },
        {
          "lat": -33.798434,
          "lng": 151.288069
        },
        {
          "lat": -33.798326,
          "lng": 151.288256
        },
        {
          "lat": -33.798101,
          "lng": 151.288646
        },
        {
          "lat": -33.798042,
          "lng": 151.288605
        },
        {
          "lat": -33.797894,
          "lng": 151.288514
        },
        {
          "lat": -33.797927,
          "lng": 151.288457
        },
        {
          "lat": -33.798133,
          "lng": 151.288103
        },
        {
          "lat": -33.797871,
          "lng": 151.287897
        },
        {
          "lat": -33.798198,
          "lng": 151.287372
        },
        {
          "lat": -33.7982,
          "lng": 151.287317
        },
        {
          "lat": -33.798297,
          "lng": 151.287162
        },
        {
          "lat": -33.798321,
          "lng": 151.287182
        },
        {
          "lat": -33.798423,
          "lng": 151.287006
        },
        {
          "lat": -33.798497,
          "lng": 151.287068
        },
        {
          "lat": -33.798818,
          "lng": 151.286516
        },
        {
          "lat": -33.798867,
          "lng": 151.286435
        },
        {
          "lat": -33.798375,
          "lng": 151.286027
        },
        {
          "lat": -33.798358,
          "lng": 151.285997
        },
        {
          "lat": -33.798283,
          "lng": 151.286065
        },
        {
          "lat": -33.798266,
          "lng": 151.286059
        },
        {
          "lat": -33.798672,
          "lng": 151.285339
        },
        {
          "lat": -33.798802,
          "lng": 151.285108
        },
        {
          "lat": -33.799054,
          "lng": 151.284662
        }
      ]
    ],
    "catchmentSections": [
      {
        "catchmentSectionId": 1801007,
        "mapId": 7866,
        "catchmentId": 17430,
        "locationId": 55705,
        "postzoneGroupId": "A ",
        "postzoneId": "2095  ",
        "sectionId": "09",
        "quantity": 233,
        "mode": "BUILD",
        "waves": null,
        "index": null,
        "colour": null,
        "duplicate": false
      }
    ],
    "vacant": false
  }
]
