import { useRouter } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import { useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";

export default function IntroScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const player = useVideoPlayer(
    require("../../assets/video/creative-pocket.mp4"),
    (player) => {
      player.loop = false;
      player.muted = true;
      player.playbackRate = 1.5;
      player.play();
    },
  );

  useEffect(() => {
    const subscription = player.addListener("playToEnd", () => {
      router.replace("/Login");
    });

    return () => subscription.remove();
  }, [player, router]);

  return (
    <View style={[styles.container, { width, height }]}>
      <VideoView
        player={player}
        style={styles.video}
        contentFit="cover"
        nativeControls={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
