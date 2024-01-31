import { StyleSheet, View, Text } from 'react-native';
import {useSelector} from 'react-redux';
// import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/contexts/favorites-context';
import MealsList from '../components/MealsList/MealsList';

function FavoriteScreen({ }) {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>お気に入りメニューはありません。</Text>
      <Text style={styles.emptyText}>追加してみよう！</Text>
      
    </View>
  }

  return <MealsList items={favoriteMeals} />;
}
export default FavoriteScreen;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
});