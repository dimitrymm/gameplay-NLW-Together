import React from "react";
import {ScrollView} from "react-native";
import {styles} from "./styles";
import { categories } from "../../utils/categories";

export function CategorySelect(){
    return (
        <ScrollView style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:40}}
        >
            {
                categories.map(category =>(
                    <Category
                    
                    />
                ))
            }
        </ScrollView>
    )
}