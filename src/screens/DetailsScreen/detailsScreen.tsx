import { useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

export default function DetailsScreen({ navigation }: any) {
  const route = useRoute()

  console.log(route.params);

  return (
    <>
    </>
  );
}


const ButtonPress = styled.Button`
  
`
