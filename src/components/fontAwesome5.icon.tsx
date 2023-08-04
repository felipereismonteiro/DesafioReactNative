type Props = {
 name: string;
 size: number;
}

import Icon from "react-native-vector-icons/FontAwesome5";

export default function FontAwesome5Icon(Props: Props) {
 return <Icon name={Props.name} size={Props.size} />
}