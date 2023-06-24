import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleContainerText}>Публікації</Text>
        </View>
        <TouchableOpacity style={styles.buttonLogOut}>
          <Image
            style={styles.iconLogOut}
            source={require("../images/log-out.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.user}>
          <Image
            style={styles.userImage}
            source={require("../images/avatar.jpg")}
          />
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.functionalButtons}>
        <TouchableOpacity style={styles.buttonMore}>
          <Image
            style={styles.iconMore}
            source={require("../images/grid.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAdd}>
          <Image style={styles.iconAdd} source={require("../images/new.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUser}>
          <Image
            style={styles.iconUser}
            source={require("../images/user.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    position: "relative",
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    paddingTop: 44,
    marginBottom: 16,
  },
  titleContainer: {
    width: 175,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  titleContainerText: {
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  buttonLogOut: {
    position: "absolute",
    top: "50%",
    marginTop: 32,
    height: 24,
    right: 10,
  },
  iconLogOut: {
    width: 24,
    height: 24,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  userImage: {
    borderRadius: 16,
    width: 60,
    height: 60,
    marginRight: 8,
  },
  userName: {
    lineHeight: 15,
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  userEmail: {
    lineHeight: 13,
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
  functionalButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    borderTopColor: "rgba(0, 0, 0, 0.3)",
    borderTopStyle: "solid",
    borderTopWidth: 1,
    paddingTop: 9,
    paddingBottom: 22,
    gap: 31,
  },
  iconMore: {
    width: 40,
    height: 40,
  },
  iconAdd: {
    width: 70,
    height: 40,
  },
  iconUser: {
    width: 40,
    height: 40,
  },
});
