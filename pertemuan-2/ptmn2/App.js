import React, { useState, useRef, useEffect } from "react";
import styles from "./globalCSS";

import {
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

const PROFILE = {
  name: "EUIS FAHIRA",
  title: "mahasiswa",
  email: "euisfahiraa.y@gmail.com",
  phone: "+62 857-0315-3539",
  location: "Cirebon, Jawa Barat",
  bio: "Mahasiswa aktif prodi Informatika.",
  // URL gambar dari internet (avatar online)
  avatar: "https://lh3.googleusercontent.com/ogw/AF2bZyinydt9F9_75_eEvtV9IIC5LeSiD6CpOmfUX0GB-mkLFg=s521-c-mo",
};

const SKILLS = [
  { id: "1", name: "React Native", level: 90, color: "#61DAFB" },
  { id: "2", name: "Flutter", level: 75, color: "#02569B" },
  { id: "3", name: "JavaScript", level: 88, color: "#F7DF1E" },
  { id: "4", name: "TypeScript", level: 80, color: "#3178C6" },
  { id: "5", name: "Node.js", level: 70, color: "#339933" },
  { id: "6", name: "Firebase", level: 82, color: "#FFCA28" },
  { id: "7", name: "UI/UX Design", level: 85, color: "#E68BBE" },
  { id: "8", name: "Graphic Design", level: 80, color: "#F4B8DA" },
  { id: "9", name: "Project Management", level: 75, color: "#A8D8EA" },
];

const SECTIONS = [
  {
    title: "💼 Pengalaman Organisasi",
    data: [
      {
        id: "e1",
        role: "Anggota Fundraising",
        company: "Informatics Fair Vol.2",
        period: "2026",
        desc: "Berperan dalam membantu persiapan, koordinasi, dan pelaksanaan kegiatan Informatics Fair Vol. 2 bersama tim kepanitiaan..",
      },
      {
        id: "e2",
        role: "Anggota KKN REKOGNISI",
        company: "Kelompok-3",
        period: "2026",
        desc: "Berpartisipasi dalam kegiatan pemberdayaan masyarakat melalui pengembangan produk berbasis potensi lokal.",
      },
      {
        id: "e3",
        role: "Sekretaris Umum 2",
        company: "EKSKUL KIR SMAN 1 LEMAHABANG",
        period: "2023 – 2024",
        desc: "Bertanggung jawab dalam mengelola administrasi kegiatan, mencatat agenda dan hasil rapat, serta membantu penyusunan dokumentasi dan laporan kegiatan ekstrakurikuler.",
      },
    ],
  },
  {
    title: "🎓 Riwayat Pendidikan",
    data: [
      {
        id: "d1",
        role: "S1 Informatika",
        company: "Universitas Islam Negeri Siber Syekh Nurjati Cirebon",
        period: "2024 – Sekarang",
        desc: "Mahasiswa Informatika yang mempelajari pengembangan aplikasi, pemrograman, dan teknologi digital.",
      },
      {
        id: "d2",
        role: "MIPA",
        company: "SMA Negeri 1 LEMAHABANG",
        period: "2021 – 2024",
        desc: "Menempuh pendidikan tingkat SMA dengan fokus pada bidang Matematika dan Ilmu Pengetahuan Alam (MIPA), serta mengembangkan kemampuan akademik dan berpikir analitis.",
      },
    ],
  },
];

// ========================================
// DATA SOSIAL MEDIA
// ========================================

const SOCIAL = [
  { id: "s1", label: "GitHub", icon: "💻", url: "https://github.com/eissss-f" },
  { id: "s2", label: "Instagram", icon: "📷", url: "https://www.instagram.com/fahiraa.y?stkn=cmg0eDZ0dWg2eWJr&utm_source=qr" },
];

// SUB-COMPONENT: SkillCard
const SkillCard = ({ item }) => {
  return (
    <View style={styles.skillCard}>
      <View style={styles.skillHeader}>
        <Text style={styles.skillName}>{item.name}</Text>
        <Text style={styles.skillPercent}>{item.level}%</Text>
      </View>

      <View style={styles.progressBg}>
        <View
          style={{
            ...styles.progressFill,
            width: `${item.level}%`,
            backgroundColor: item.color,
          }}
        />
      </View>
    </View>
  );
};
// SUB-COMPONENT: TimelineCard
const TimelineCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.timelineCard} onPress={() => onPress(item)} activeOpacity={0.75}>
      <View style={styles.timelineDot} />

      <View style={styles.timelineContent}>
        <Text style={styles.timelineRole}>{item.role}</Text>
        <Text style={styles.timelineCompany}>{item.company}</Text>
        <Text style={styles.timelinePeriod}>{item.period}</Text>
        <Text style={styles.timelineHint}>Ketuk untuk detail</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  // STATE
  const [openToWork, setOpenToWork] = useState(true);
  const avatarScale = useRef(new Animated.Value(0.5)).current;
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [downloadModalVisible, setDownloadModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Info");

  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [contactModalTitle, setContactModalTitle] = useState("");
  const [contactModalMessage, setContactModalMessage] = useState("");
  const [contactModalType, setContactModalType] = useState("info");

  useEffect(() => {
    Animated.spring(avatarScale, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, []);

  // HANDLER FUNCTIONS
  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const showContactModal = (title, message, type = "info") => {
    setContactModalTitle(title);
    setContactModalMessage(message);
    setContactModalType(type);
    setContactModalVisible(true);
  };

  const handleSend = () => {
    if (!senderName.trim() || !message.trim()) {
      showContactModal("⚠️ Peringatan", "Nama dan pesan tidak boleh kosong!", "warning");
      return;
    }

    setSending(true);

    setTimeout(() => {
      const namaPengirim = senderName;

      setSending(false);
      setSenderName("");
      setMessage("");

      showContactModal("✅ Berhasil", `Pesan dari ${namaPengirim} telah terkirim!`, "success");
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1a1a2e" barStyle="light-content" />
      {/* HEADER BAR */}
      <View style={styles.headerBar}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>💼 Curriculum Vitae</Text>
        </View>
        {/* Toggle "Open to Work" */}
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>{openToWork ? "🟢 Open" : "🔴 Busy"}</Text>
          <Switch value={openToWork} onValueChange={setOpenToWork} trackColor={{ false: "#555", true: "#4ade80" }} thumbColor={openToWork ? "#fff" : "#aaa"} />
        </View>
      </View>

      <View style={styles.tabContainer}>
        {["Info", "Skills", "Kontak"].map((tab) => (
          <TouchableOpacity key={tab} style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]} onPress={() => setActiveTab(tab)} activeOpacity={0.8}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* ========================================
          SECTION PROFIL
          Konsep: View, Text, Image
          ======================================== */}
        {activeTab === "Info" && (
          <View style={styles.profileSection}>
            {/* 1. Image → foto profil dari URL internet */}
            <Animated.Image
              source={{ uri: PROFILE.avatar }}
              style={[
                styles.avatar,
                {
                  transform: [{ scale: avatarScale }],
                },
              ]}
              resizeMode="cover"
            />
            {openToWork && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>🟢 Open to Work</Text>
              </View>
            )}

            {/* 2. Text → berbasis ukuran & weight */}
            <Text style={styles.profileName}>{PROFILE.name}</Text>
            <Text style={styles.profileTitle}>{PROFILE.title}</Text>
            <Text style={styles.profileBio}>{PROFILE.bio}</Text>
            {/* Info kontak dalam baris horizontal */}
            <View style={styles.contactRow}>
              <Text style={styles.contactItem}>📧 {PROFILE.email}</Text>
              <Text style={styles.contactItem}>📍 {PROFILE.location}</Text>
              <Text style={styles.contactItem}>📱 {PROFILE.phone}</Text>
            </View>
            {/* 3. TouchableOpacity → tombol sosial media */}
            <View style={styles.socialRow}>
              {SOCIAL.map((s) => (
                <TouchableOpacity
                  key={s.id}
                  style={styles.socialButton}
                  onPress={() => {
                    console.log("Sosmed diklik:", s.label);
                    showContactModal(`🔗 ${s.label}`, s.url, "info");
                  }}
                  activeOpacity={0.8}
                >
                  <Text style={styles.socialIcon}>{s.icon}</Text>
                  <Text style={styles.socialLabel}>{s.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* 10. Pressable → tombol dengan efek saat ditekan */}
            <Pressable
              style={({ pressed }) => [styles.downloadBtn, pressed && styles.downloadBtnPressed]}
              onPress={() => {
                setPressing(true);

                setTimeout(() => {
                  setPressing(false);
                  setDownloadModalVisible(true);
                }, 1000);
              }}
            >
              <Text style={styles.downloadBtnText}>{pressing ? "⏳ Mengunduh..." : "📄 Download CV (PDF)"}</Text>
            </Pressable>
          </View>
        )}

        {/* ════════════════════════════════════
      SECTION SKILLS
      Komponen: FlatList
      ════════════════════════════════════ */}
        {activeTab === "Skills" && (
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>🛠️ Keahlian</Text>
            <Text style={styles.sectionSubtitle}>→ FlatList: menampilkan list data secara efisien</Text>

            {/* 5. FlatList → daftar skill */}
            <FlatList data={SKILLS} keyExtractor={(item) => item.id} renderItem={({ item }) => <SkillCard item={item} />} scrollEnabled={false} ItemSeparatorComponent={() => <View style={{ height: 8 }} />} />
          </View>
        )}

        {activeTab === "Info" && (
          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>📋 Riwayat</Text>
            <Text style={styles.sectionSubtitle}>→ SectionList: data dikelompokkan per kategori. Ketuk kartu untuk Modal detail.</Text>

            {/* 6. SectionList → pengalaman & pendidikan */}
            <SectionList
              sections={SECTIONS}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                // TimelineCard punya onPress untuk membuka Modal
                <TimelineCard item={item} onPress={handleCardPress} />
              )}
              // renderSectionHeader: header untuk tiap kelompok
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>{title}</Text>
                </View>
              )}
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
            />
          </View>
        )}

        {activeTab === "Kontak" && (
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>📩 Hubungi Saya</Text>
              <Text style={styles.sectionSubtitle}>→ TextInput, Button, ActivityIndicator</Text>
              {/* 7. TextInput → input nama */}
              <TextInput style={styles.textInput} placeholder="Nama Anda" placeholderTextColor="#888" value={senderName} onChangeText={setSenderName} returnKeyType="next" editable={!sending} />
              {/* 7. TextInput → input pesan */}
              <TextInput
                style={[styles.textInput, styles.textArea]}
                placeholder="Tulis pesan Anda di sini..."
                placeholderTextColor="#888"
                value={message}
                onChangeText={setMessage}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
                editable={!sending}
              />
              {sending ? (
                <View style={styles.loadingRow}>
                  <ActivityIndicator size="large" color="#7c3aed" />
                  <Text style={styles.loadingText}>Mengirim pesan...</Text>
                </View>
              ) : (
                <Button title="Kirim Pesan" color="#7c3aed" onPress={handleSend} />
              )}
            </View>
          </KeyboardAvoidingView>
        )}

        {activeTab === "Info" && (
          <View style={styles.componentSection}>
            <Text style={styles.componentTitle}>📚 Core Components yang Digunakan</Text>

            <Text style={styles.componentItem}>1. View — Membuat container dan mengatur layout.</Text>

            <Text style={styles.componentItem}>2. Text — Menampilkan teks dan informasi pada aplikasi.</Text>

            <Text style={styles.componentItem}>3. Image — Menampilkan foto profil dari URL internet.</Text>

            <Text style={styles.componentItem}>4. Animated — Memberikan animasi pada foto profil.</Text>

            <Text style={styles.componentItem}>5. ScrollView — Memungkinkan pengguna menggulir halaman CV.</Text>

            <Text style={styles.componentItem}>6. FlatList — Menampilkan daftar skills secara efisien.</Text>

            <Text style={styles.componentItem}>7. SectionList — Menampilkan data berdasarkan kelompok atau kategori.</Text>

            <Text style={styles.componentItem}>8. TextInput — Menyediakan kolom untuk memasukkan nama dan pesan.</Text>

            <Text style={styles.componentItem}>9. Button — Menjalankan aksi untuk mengirim pesan.</Text>

            <Text style={styles.componentItem}>10. TouchableOpacity — Membuat tombol interaktif seperti tombol sosial media.</Text>

            <Text style={styles.componentItem}>11. Pressable — Membuat tombol Download CV dengan efek saat ditekan.</Text>

            <Text style={styles.componentItem}>12. Switch — Mengubah status Open to Work dan Busy.</Text>

            <Text style={styles.componentItem}>13. Modal — Menampilkan informasi dalam popup.</Text>

            <Text style={styles.componentItem}>14. ActivityIndicator — Menampilkan indikator loading saat mengirim pesan.</Text>

            <Text style={styles.componentItem}>15. StatusBar — Mengatur tampilan status bar perangkat.</Text>

            <Text style={styles.componentItem}>16. SafeAreaView — Menjaga konten agar tidak tertutup area sistem.</Text>

            <Text style={styles.componentItem}>17. KeyboardAvoidingView — Menyesuaikan tampilan ketika keyboard muncul.</Text>

            <Text style={styles.componentItem}>18. StyleSheet — Mengatur seluruh styling komponen aplikasi.</Text>
          </View>
        )}

        <View style={{ height: 40 }} />

        <View style={{ height: 40 }} />
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide" transparent onRequestClose={() => setModalVisible(false)}>
        {/* Overlay gelap di belakang dialog */}
        <View style={styles.modalOverlay}>
          {/* Kotak dialog */}
          <View style={styles.modalBox}>
            {/* Render isi hanya jika ada item yang dipilih */}
            {selectedItem && (
              <>
                <Text style={styles.modalTitle}>{selectedItem.role}</Text>
                <Text style={styles.modalCompany}>{selectedItem.company}</Text>
                <Text style={styles.modalPeriod}>📅 {selectedItem.period}</Text>
                <View style={styles.modalDivider} />
                <Text style={styles.modalDesc}>{selectedItem.desc}</Text>
              </>
            )}

            {/* Tombol tutup modal */}
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseBtnText}>✕ Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={downloadModalVisible} transparent animationType="fade" onRequestClose={() => setDownloadModalVisible(false)}>
        <View style={styles.downloadModalOverlay}>
          <View style={styles.downloadModalBox}>
            <Text style={styles.downloadModalTitle}>📄 Download</Text>

            <Text style={styles.downloadModalText}>CV sedang disiapkan...</Text>

            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setDownloadModalVisible(false)}>
              <Text style={styles.modalCloseBtnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={contactModalVisible} transparent animationType="fade" onRequestClose={() => setContactModalVisible(false)}>
        <View style={styles.contactModalOverlay}>
          <View style={styles.contactModalBox}>
            <Text style={[styles.contactModalTitle, contactModalType === "warning" ? styles.warningTitle : styles.successTitle]}>{contactModalTitle}</Text>

            <Text style={styles.contactModalText}>{contactModalMessage}</Text>

            <TouchableOpacity style={styles.contactModalButton} onPress={() => setContactModalVisible(false)} activeOpacity={0.8}>
              <Text style={styles.contactModalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
