import * as React from "react";
import {Icon} from "native-base";

const TabBarIconMenu = (props: {color: string}) => (
  <Icon name='book-open'
    type={"Feather"}
    style={{fontSize: 20, color: props.color}}/>
);

export default TabBarIconMenu;
