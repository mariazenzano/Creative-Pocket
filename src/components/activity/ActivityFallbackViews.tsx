import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";

import { theme } from "../../constants/theme";
import type { MapNode } from "../../types/map";
import { getActivityLabel } from "./ActivityLogic";
import { styles } from "./ActivityStyles";

type EmptyProps = {
  activity: MapNode;
  onBack: () => void;
};

export function ActivityEmptyView({
  activity,
  onBack,
}: EmptyProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={theme.colors.text}
          />
        </Pressable>

        <View style={styles.activityIcon}>
          <Ionicons
            name="book-outline"
            size={48}
            color={theme.colors.primary}
          />
        </View>

        <Text style={styles.activityType}>
          {getActivityLabel(activity.type)}
        </Text>

        <Text style={styles.title}>{activity.title}</Text>

        <Text style={styles.description}>
          {activity.description}
        </Text>

        <View style={styles.infoCard}>
          <Ionicons
            name="construct-outline"
            size={24}
            color={theme.colors.secondary}
          />

          <Text style={styles.infoText}>
            Estamos preparando el contenido de esta actividad.
            Próximamente podrás comenzar a aprender aquí.
          </Text>
        </View>
      </View>
    </View>
  );
}

type ErrorProps = {
  onBack: () => void;
};

export function ActivityErrorView({ onBack }: ErrorProps) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.title}>
        Actividad no encontrada
      </Text>

      <Pressable style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Volver</Text>
      </Pressable>
    </View>
  );
}