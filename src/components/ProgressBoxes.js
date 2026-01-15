import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBoxes = ({ checkedCount = 0 }) => {
  const totalDays = 30;
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {days.map((day) => {
          const isChecked = day <= checkedCount;
          return (
            <View
              key={day}
              style={[
                styles.box,
                {
                  backgroundColor: isChecked ? '#D0F7E1' : '#fff',
                  borderColor: isChecked ? '#30E87D' : '#D1D5DB',
                },
              ]}
            >
              {isChecked ? <Text style={styles.tick}>✓</Text>: <Text style={{color:'#D1D5DB'}}>{day}</Text>}
            </View>
          );
        })}
      </View>
      <Text style={styles.infoText}>
        İlerleme: {checkedCount} / {totalDays}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row', // Yan yana dizilim
    flexWrap: 'wrap',     // Satır dolunca alt satıra geç
    justifyContent: 'center',
    width: '100%',
  },
  box: {
    width: 50,
    height: 50,
    margin: 4,            // Kutular arası boşluk
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // iOS için hafif gölge
   
       // Android için gölge
  },
  tick: {
    color: '#30E87D',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
});

export default ProgressBoxes;