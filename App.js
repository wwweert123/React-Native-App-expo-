import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { Button } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import ViewImageScreen from "./App/screens/ViewImageScreen";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import {
  useDimensions,
  useDeviceOrientation,
} from "./node_modules/@react-native-community/hooks";

export default function App() {
  return <ViewImageScreen />;
}
