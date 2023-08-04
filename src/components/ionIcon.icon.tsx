type Props = {
 name: string;
 size: number;
}

import Icon from "react-native-vector-icons/Ionicons";

export default function IonIcon(Props: Props) {
 return <Icon name={Props.name} size={Props.size} color={'white'} />
}