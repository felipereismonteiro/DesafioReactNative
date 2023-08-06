type Props = {
 name: string;
 size: number;
 color: string;
}

import Icon from "react-native-vector-icons/FontAwesome5";

export default function FontAwesome5Icon(Props: Props) {
 return <Icon name={Props.name} size={Props.size} color={Props.color}/>
}