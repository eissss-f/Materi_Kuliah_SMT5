import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama Lengkap: Euis Fahira Yuningsih</Text>
      <Text>Tempat, Tanggal Lahir: Cirebon, 30 Maret 2006.</Text>
      <Text>Cita-Cita: Pengusaha Sukses</Text>
      <Text>Rencana Hidup: Jadi orang kaya</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
