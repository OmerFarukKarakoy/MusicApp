import React, {useState} from "react";
import { SafeAreaView, Text,StyleSheet, FlatList,View } from "react-native";
import music_data from './music-data.json';
import SongCard from './components/SongCard/SongCard'; 
import SearchBar from "./components/SearchBar/index";
function App(){
    const [list, setList] = useState(music_data);

    const renderSong = ({item}:{ item: any }) => <SongCard song={item}/>;

    const renderSeperator = () => <View style={styles.seperator}/>

    const handleSearch = (text: string) => {
        const filteredList = music_data.filter(song =>{
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();
            
            return currentTitle.indexOf(searchedText)>-1;
        });

        setList(filteredList);
    }
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar onSearch={handleSearch}/>
                <FlatList 
                keyExtractor={(item) => item.id.toString()}
                data = {list}
                renderItem={renderSong}//renderItembileşeni içinde her bir öğeyi nasıl 
                //görüntüleyeceğinizi belirlemenizi sağlar.
                ItemSeparatorComponent={renderSeperator}
                />
        </SafeAreaView>
    );
}

export default App;

const styles= StyleSheet.create({
    container: {flex:1},
    seperator:{
        borderWidth:1,
        borderColor:'#e0e0e0',
    }
})

