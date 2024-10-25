// // components/TimeSlot/TimeSlot.js
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

// const TimeSlot = ({
//   slot,
//   index,
//   scrollY,
//   handleReservation,
//   showReservationDetails,
//   maxUsersPerSlot,
// }) => {
//   const { time, available, nameList } = slot;
//   const isFullyBooked = available === 0;

//   return (
//     <Animated.View
//       key={time}
//       style={[
//         styles.timeSlot,
//         {
//           opacity: scrollY.interpolate({
//             inputRange: [(index - 1) * 80, index * 80, (index + 1) * 80],
//             outputRange: [0.7, 1, 0.7],
//             extrapolate: 'clamp',
//           }),
//           transform: [
//             {
//               scale: scrollY.interpolate({
//                 inputRange: [(index - 1) * 80, index * 80, (index + 1) * 80],
//                 outputRange: [0.95, 1, 0.95],
//                 extrapolate: 'clamp',
//               }),
//             },
//           ],
//         },
//       ]}
//     >
//       <TouchableOpacity
//         onPress={() => handleReservation(time)}
//         style={styles.timeSlotContent}
//       >
//         <LinearGradient
//           colors={
//             isFullyBooked ? ['#FFC0CB', '#FFB6C1'] : ['#E0FFFF', '#B0E0E6']
//           }
//           style={styles.timeSlotGradient}
//         >
//           <View style={styles.timeSlotHeader}>
//             <Text style={styles.timeText}>{time}</Text>
//             <View style={styles.availabilityContainer}>
//               <MaterialIcons
//                 name={isFullyBooked ? 'event-busy' : 'event-available'}
//                 size={18}
//                 color={isFullyBooked ? '#8B0000' : '#006400'}
//               />
//               <Text
//                 style={[
//                   styles.availabilityText,
//                   isFullyBooked && styles.fullyBooked,
//                 ]}
//               >
//                 {isFullyBooked ? 'Full' : `${available} left`}
//               </Text>
//             </View>
//           </View>
//           <View style={styles.reservedNamesContainer}>
//             {nameList.map((name, idx) => (
//               <View key={idx} style={styles.avatarCircle}>
//                 <Text style={styles.avatarText}>{name[0].toUpperCase()}</Text>
//               </View>
//             ))}
//             {nameList.length > maxUsersPerSlot && (
//               <View style={styles.avatarCircle}>
//                 <Text style={styles.avatarText}>
//                   +{nameList.length - maxUsersPerSlot}
//                 </Text>
//               </View>
//             )}
//           </View>
//         </LinearGradient>
//       </TouchableOpacity>
//       {nameList.length > 0 && (
//         <TouchableOpacity
//           style={styles.detailsButton}
//           onPress={showReservationDetails}
//         >
//           <FontAwesome name="info-circle" size={20} color="#4682B4" />
//         </TouchableOpacity>
//       )}
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   // timeSlot: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   marginBottom: 12,
//   //   borderRadius: 12,
//   //   overflow: 'hidden',
//   //   elevation: 2,
//   //   shadowColor: '#000',
//   //   shadowOffset: { width: 0, height: 2 },
//   //   shadowOpacity: 0.1,
//   //   shadowRadius: 4,
//   //   backgroundColor: '#FFFFFF',
//   // },
//     timeSlot: {
//     marginBottom: 15,
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   // timeSlotContent: {
//   //   flex: 1,
//   // },

//     timeSlotContent: {
//     borderRadius: 12,
//     overflow: "hidden",
//   },
//   // timeSlotGradient: {
//   //   padding: 12,
//   //   borderRadius: 12,
//   //   flexDirection: 'column',
//   //   justifyContent: 'space-between',
//   // },
//     timeSlotGradient: {
//     padding: 15,
//   },
//   // timeSlotHeader: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   alignItems: 'center',
//   // },
//     timeSlotHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },

//   // timeText: {
//   //   fontSize: 16,
//   //   fontWeight: '600',
//   //   color: '#333333',
//   // },
//     timeText: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#2F4F4F",
//   },
//   availabilityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   // availabilityText: {
//   //   fontSize: 14,
//   //   marginLeft: 4,
//   //   color: '#333333',
//   // },
//     availabilityText: {
//     fontSize: 14,
//     marginLeft: 5,
//     color: "#006400",
//   },
//   // fullyBooked: {
//   //   color: '#8B0000',
//   //   fontWeight: '600',
//   // },
//     fullyBooked: {
//     color: "#8B0000",
//   },
//   // reservedNamesContainer: {
//   //   flexDirection: 'row',
//   //   marginTop: 8,
//   //   flexWrap: 'wrap',
//   // },
//     reservedNamesContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   // avatarCircle: {
//   //   width: 28,
//   //   height: 28,
//   //   borderRadius: 14,
//   //   backgroundColor: '#4682B4',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   marginRight: 6,
//   //   marginTop: 4,
//   // },

//     avatarCircle: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: "#4682B4",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 5,
//     marginBottom: 5,
//   },

//     avatarText: {
//     color: "#FFFFFF",
//     fontSize: 12,
//     fontWeight: "bold",
//   },
//   // detailsButton: {
//   //   padding: 8,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   // },
//     detailsButton: {
//     position: "absolute",
//     right: 10,
//     bottom: 10,
//     padding: 5,
//   },
// });

// export default TimeSlot;



// components/TimeSlot/TimeSlot.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const TimeSlot = ({
  slot,
  index,
  scrollY,
  handleReservation,
  showReservationDetails,
  maxUsersPerSlot,
}) => {
  const { time, available, nameList } = slot;
  const isFullyBooked = available === 0;

  return (
    <Animated.View
      key={time}
      style={[
        styles.timeSlot,
        {
          opacity: scrollY.interpolate({
            inputRange: [(index - 1) * 80, index * 80, (index + 1) * 80],
            outputRange: [0.7, 1, 0.7],
            extrapolate: 'clamp',
          }),
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [(index - 1) * 80, index * 80, (index + 1) * 80],
                outputRange: [0.95, 1, 0.95],
                extrapolate: 'clamp',
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => handleReservation(time)}
        style={styles.timeSlotContent}
      >
        <LinearGradient
          colors={
            isFullyBooked ? ['#FFC0CB', '#FFB6C1'] : ['#E0FFFF', '#B0E0E6']
          }
          style={styles.timeSlotGradient}
        >
          <View style={styles.timeSlotHeader}>
            <Text style={styles.timeText}>{time}</Text>
            <View style={styles.availabilityContainer}>
              <MaterialIcons
                name={isFullyBooked ? 'event-busy' : 'event-available'}
                size={18}
                color={isFullyBooked ? '#8B0000' : '#006400'}
              />
              <Text
                style={[
                  styles.availabilityText,
                  isFullyBooked && styles.fullyBooked,
                ]}
              >
                {isFullyBooked ? 'Full' : `${available} left`}
              </Text>
            </View>
          </View>
          <View style={styles.reservedNamesContainer}>
            {nameList.map((name, idx) => (
              <View key={idx} style={styles.avatarCircle}>
                <Text style={styles.avatarText}>{name[0].toUpperCase()}</Text>
              </View>
            ))}
            {nameList.length > maxUsersPerSlot && (
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarText}>
                  +{nameList.length - maxUsersPerSlot}
                </Text>
              </View>
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
      {nameList.length > 0 && (
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={showReservationDetails}
        >
          <FontAwesome name="info-circle" size={20} color="#4682B4" />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  timeSlot: {
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  timeSlotContent: {
    borderRadius: 12,
    overflow: "hidden",
  },
  timeSlotGradient: {
    padding: 15,
  },
  timeSlotHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  timeText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2F4F4F",
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availabilityText: {
    fontSize: 14,
    marginLeft: 5,
    color: "#006400",
  },
  fullyBooked: {
    color: "#8B0000",
  },

  reservedNamesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  avatarCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#4682B4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    marginBottom: 5,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  detailsButton: {
    position: "absolute",
    right: 10,
    bottom: 10,
    padding: 5,
  },
});

export default TimeSlot;
