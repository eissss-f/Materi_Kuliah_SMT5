import { StyleSheet, Platform } from "recat-native";
const COLORS = {
  bg: "#0f0f1a", // latar belakang
  gepad: "#1a1a2e", // kartu/panel
  cardBorder: "#2d2d44", // border kartu
  accent: "#7c3aed", // ungu utama
  accentLight: "#a78bfa", // ungu muda
  accentGold: "#f59e0b", // emas
  text: "#f0f0f0", // teks utama
  textMuted: "#9ca3af", // teks redup
  textDim: "#6b7280", // teks sangat redup
  success: "#4ade80", // hijau
  white: "#ffffff",
};

const styles = StyleSheet.create({
  // ── LAYOUT DASAR ────────────────────────────
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scroll: {
    flex: 1,
  },

  // ── HEADER BAR ────────────────────────────
  headerBar: {
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  switchLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },

  // ── SECTION PROFIL ─────────────────────────
  profileSection: {
    alignItems: "center", // rata tengah horizontal
    paddingVertical: 32,
    paddingHorizontal: 28,
    backgroundColor: COLORS.card,
    marginBottom: 16,
    borderBottomLeftRadius: 24, // sudut kiri bawah melengkung
    borderBottomRightRadius: 24,
    borderColor: COLORS.accent,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55, // lingkaran (width/2)
    borderWidth: 3,
    borderColor: COLORS.accent,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "#052e16",
    borderWidth: 1,
    borderColor: COLORS.success,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeText: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: "700",
  },
  profileName: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },
  profileTitle: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 14,
    textAlign: "center",
  },
  profileBio: {
    color: COLORS.textMuted,
    fontSize: 13,
    lineHeight: 20, // tinggi tiap baris teks
    textAlign: "center",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  contactRow: {
    flexDirection: "row", // bungkus ke baris baru jika tidak muat
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom: 6,
  },
  contactItem: {
    color: COLORS.textMuted,
    fontSize: 12,
    textAlign: "center",
    marginBottom: 4,
  },

  // ── SOSIAL MEDIA ───────────────────────────
  socialRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
    marginBottom: 20,
  },
  socialButton: {
    alignItems: "center",
    backgroundColor: "#16213e",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  socialIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  socialLabel: {
    color: COLORS.accentLight,
    fontSize: 11,
    fontWeight: "600",
  },

  // ── PRESSABLE DOWNLOAD ─────────────────────
  downloadBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 50, // pill shape
    elevation: 4,
    shadowColor: COLORS.accent,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  downloadBtnPressed: {
    backgroundColor: "#5b21b6", // lebih gelap saat ditekan
  },
  downloadBtnText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
  },

  // ── SECTION BOX (wrapper kartu) ────────────
  sectionBox: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 4,
  },
  sectionSubtitle: {
    color: COLORS.textDim,
    fontSize: 11,
    fontStyle: "italic",
    marginBottom: 16,
  },

  sectionHeader: {
    backgroundColor: "#0f172a",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },

  sectionHeaderText: {
    color: COLORS.accentLight,
    fontWeight: "700",
    fontSize: 13,
  },

  skillCard: {
    backgroundColor: "#16213e",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  skillHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  skillName: {
    color: COLORS.text,
    fontWeight: "600",
    fontSize: 13,
  },
  skillPercent: {
    color: COLORS.accentLight,
    fontWeight: "700",
    fontSize: 13,
  },
  progressBg: {
    height: 6,
    backgroundColor: "#0f172a",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: 6,
    borderRadius: 4,
    // width & backgroundColor diset secara inline (dinamis dari data)
  },

  timelineCard: {
    flexDirection: "row",
    backgroundColor: "#16213e",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.accent,
    marginTop: 4,
    marginRight: 12,
  },
  timelineContent: { flex: 1 },
  timelineRole: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 2,
  },
  timelineCompany: {
    color: COLORS.accentLight,
    fontSize: 13,
    marginBottom: 2,
  },
  timelinePeriod: {
    color: COLORS.textMuted,
    fontSize: 11,
    marginBottom: 6,
  },
  timelineHint: {
    color: COLORS.accentGold,
    fontSize: 11,
    fontStyle: "italic",
  },

  textInput: {
    backgroundColor: "#0f172a",
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 10,
    paddingHorizontal: 14,
    // Platform.OS membedakan iOS dan Android
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
    fontSize: 14,
    marginBottom: 12,
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 10,
  },

  loadingText: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: "600",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "flex-end",
  },

  modalBox: {
    backgroundColor: "#1e1b4b",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 28,
    borderTopWidth: 3,
    borderTopColor: COLORS.accent,
  },

  modalTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
  },

  modalCompany: {
    color: COLORS.accentLight,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },

  modalPeriod: {
    color: COLORS.textMuted,
    fontSize: 13,
    marginBottom: 16,
  },

  modalDivider: {
    height: 1,
    backgroundColor: COLORS.cardBorder,
    marginBottom: 16,
  },

  modalDesc: {
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 24,
  },

  modalCloseBtn: {
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  modalCloseBtnText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },

  tabButtonActive: {
    backgroundColor: COLORS.accent,
  },

  tabText: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: "600",
  },

  tabTextActive: {
    color: COLORS.white,
    fontWeight: "700",
  },

  downloadModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  downloadModalBox: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#1e1b4b",
    borderRadius: 20,
    padding: 28,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },

  downloadModalTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },

  downloadModalText: {
    color: COLORS.textMuted,
    fontSize: 14,
    marginBottom: 24,
  },

  // ── CONTACT MESSAGE MODAL ─────────────────

  contactModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  contactModalBox: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#1e1b4b",
    borderRadius: 20,
    padding: 28,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },

  contactModalTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },

  warningTitle: {
    color: "#fbbf24",
  },

  successTitle: {
    color: "#4ade80",
  },

  contactModalText: {
    color: COLORS.textMuted,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 24,
  },

  contactModalButton: {
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  contactModalButtonText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
  },

  componentSection: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#1a1a2e",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  componentTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 14,
  },

  componentItem: {
    color: COLORS.textMuted,
    fontSize: 13,
    lineHeight: 22,
  },
});
export default StyleSheet;
