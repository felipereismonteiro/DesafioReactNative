import styled from "styled-components/native";

export default function DetailsScreen({ navigation }: any) {
  return (
    <>
      <ButtonPress
        onPress={() =>
          navigation.navigate("Details Screen", { name: "Detail screen" })
        }
        title="Mover para a segunda tela"
      />
    </>
  );
}


const ButtonPress = styled.Button`
  
`
