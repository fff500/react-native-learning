import {
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  Pressable,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { colors } from "../styles/global";
import PlusIcon from "../components/ui/PlusIcon";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const showButton = (
    <TouchableOpacity>
      <Text style={[styles.baseText, styles.passwordButtonText]}>Показати</Text>
    </TouchableOpacity>
  );

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <>
        <Image
          source={require("../assets/background.png")}
          resizeMode="cover"
          style={styles.image}
        />

        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <View style={styles.profileImageWrapper}>
              <TouchableOpacity style={styles.addButton}>
                <PlusIcon style={styles.addButtonIcon} />
              </TouchableOpacity>
              <Image />
            </View>

            <Text style={styles.title}>Реєстрація</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input autofocus={true} placeholder="Логін" />

              <Input autofocus={true} placeholder="Адреса електронної пошти" />

              <Input
                placeholder="Пароль"
                rightButton={showButton}
                outerStyles={styles.passwordButton}
              />
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Зареєструватися
                </Text>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Вже є акаунт?{" "}
                  <TouchableWithoutFeedback>
                    <Text style={styles.signUpText}>Увійти</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    </Pressable>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    marginTop: 42,
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    width: SCREEN_WIDTH,
    height: "62%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
  },
  profileImageWrapper: {
    position: "absolute",
    left: "50%",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,
    transform: "translateX(-50%)",
  },
  addButton: {
    display: "block",
    position: "absolute",
    width: 25,
    height: 25,
    bottom: 14,
    right: -13,
  },
  addButtonIcon: {
    borderRadius: "50%",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  passwordButtonText: {
    color: colors.blue,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    textDecorationLine: "underline",
  },
});
