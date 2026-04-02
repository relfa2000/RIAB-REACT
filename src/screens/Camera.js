import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import { Camera, useCameraDevices } from 'react-native-vision-camera';

export default function CameraScreen({ navigation }) {
  const devices = useCameraDevices();
  const device = devices?.find(d => d.position === "front");
  const camera = useRef(null);

  const [permission, setPermission] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // 🔐 PERMESSI
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const askPermissions = async () => {
        const cameraPermission = await Camera.requestCameraPermission();
        const micPermission = await Camera.requestMicrophonePermission();

        setPermission(cameraPermission === "granted" && micPermission === "granted");
      };

      askPermissions();
    });

    return unsubscribe;
  }, [navigation]);

  // 🎥 START RECORDING
  const startRecording = async () => {
    if (isRecording) return;

    setIsRecording(true);

    try {
      await camera.current.startRecording({
        onRecordingFinished: (video) => {
          console.log("Video registrato:", video.path);
          setIsRecording(false);

          // 👉 Vai alla preview
          navigation.navigate("Preview", { videoUri: video.path });
        },
        onRecordingError: (error) => {
          console.error("Errore registrazione:", error);
          setIsRecording(false);
        },
      });
    } catch (e) {
      console.error("Errore startRecording:", e);
      setIsRecording(false);
    }
  };

  // 🟥 STOP RECORDING
  const stopRecording = () => {
    if (!isRecording) return;
    camera.current.stopRecording();
  };

  if (!device || !permission) return <Text>Caricamento...</Text>;

  return (
    <View style={{ flex: 1 }}>
      {/* CAMERA */}
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        video={true}
        audio={true}
      />

      {/* SOLO REC E STOP */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isRecording ? "gray" : "red" }]}
          onPress={isRecording ? stopRecording : startRecording}
        >
          <Text style={styles.buttonText}>{isRecording ? "STOP" : "REC"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});


