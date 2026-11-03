import { FlatList, StyleSheet, Text, View } from "react-native";
import LessonCard, { Lesson } from "./LessonCard";

type LessonCarouselProps = {
  lessons: Lesson[];
  onContinue: (id: string) => void;
};

export default function LessonCarousel({
  lessons,
  onContinue,
}: LessonCarouselProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Continúa aprendiendo</Text>

      <FlatList
        data={lessons}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <LessonCard
            lesson={item}
            onContinue={onContinue}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },

  list: {
    gap: 12,
    paddingRight: 15,
  },
});