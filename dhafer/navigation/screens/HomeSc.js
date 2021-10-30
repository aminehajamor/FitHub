import * as React from "react";
import{Image , View, Text, SafeAreaView, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainCount from '../MainCount'
import tw from 'tailwind-react-native-classnames';
const data = [
  {
      id: "01",
      title:"Events",
      image:"https://w7.pngwing.com/pngs/253/892/png-transparent-computer-icons-calendar-date-event-table-calendar-text-rectangle.png",
      screen:"Events"
  },
  {
    id: "02",
    title:"Food",
    image:"data:image/png;base64,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",
    screen:"Food"
},
{
  id: "03",
  title:"Coaches",
  image:"http://www.mcicon.com/wp-content/uploads/2021/01/People_Coach_1-copy-10.jpg",
  screen:"Coaches"
},{
id: "04",
title:"Gym",
image:"https://www.seekpng.com/png/detail/309-3093415_gym-building-sport-training-svg-png-icon-free.png", 
screen:"Gym"
},{
id: "05",
title:"Blogs",
image:"https://icon-library.com/images/blogging-icon/blogging-icon-27.jpg", 
screen:"Blogs"
},{
id: "06",
title:"Bmi",
image:"https://cdn-icons-png.flaticon.com/512/3373/3373122.png", 
screen:"Bmi"
}

]
export default HomeSc = ({ navigation }) => {
  return (
    <FlatList
    data = {data}
    Vertical
    keyExtractor = {(item) => item.id}
    renderItem = {({item}) => (
      <TouchableOpacity style = {tw `p-2 pl-6 pb-8 m-2 w-40`}>
        <View style = {tw `flex flex-cro`}>
          <Image 
          style = {{ width: 120 , height: 120, resizeMode:"contain" }}
          source = {{ uri : item.image}}
          />
          <Text style = {tw `mt-2 tect-lg font-semibold`}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )}
     />
  );
};
