import {
  Modal,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Theme } from "../../themes";
import { Button } from "../Buttons";

const closeImage = require("../../../assets/close.png");

type Props = {
  isVisible: boolean;
  onClose: VoidFunction;
};

export function NewTaskModal({ isVisible, onClose }: Props) {
  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Nova Task</Text>
            <TouchableOpacity
              onPress={onClose}
              hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
            >
              <Image
                source={closeImage}
                style={styles.closeImage}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.textInput}
              placeholder="Digite o nome da task..."
              placeholderTextColor="rgba(0,0,0,0.5)"
            />
            <Button label="CREATE" />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 4,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.15,
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: Theme.colors.primary,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  closeImage: {
    width: 14,
    height: 14,
  },
  textInput: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    marginBottom: 10,
  },
  modalContent: {
    padding: 10,
  },
});
