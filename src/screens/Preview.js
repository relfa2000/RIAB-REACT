import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  PermissionsAndroid,
  Platform
} from 'react-native';

import Video from 'react-native-video';
import RNFS from 'react-native-fs';

export default function PreviewScreen({ route, navigation }) {
  const { videoUri } = route.params;

  // 📥 SALVA NELLA GALLERIA
  const saveToGallery = async () => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert("Permesso negato");
          return;
        }
      }

      const fileName = `riab_${Date.now()}.mp4`;
      const destPath = `${RNFS.PicturesDirectoryPath}/${fileName}`;

      await RNFS.copyFile(videoUri, destPath);

      Alert.alert("Successo", "Video salvato nella Galleria");
      console.log("Video salvato in:", destPath);

    } catch (error) {
      console.log("Errore salvataggio:", error);
    }
  };

  // 🔼 UPLOAD (placeholder)
  const uploadVideo = () => {
    Alert.alert("Upload non ancora implementato");
  };

  // 🔄 RIFAI
  const redoRecording = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* VIDEO PLAYER */}
      <Video
        source={{ uri: videoUri }}
        style={styles.video}
        controls
        resizeMode="contain"
      />

      {/* BOTTONI */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={saveToGallery}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={uploadVideo}>
          <Text style={styles.buttonText}>Invia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={redoRecording}>
          <Text style={styles.buttonText}>Rifai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    backgroundColor: "#111",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
