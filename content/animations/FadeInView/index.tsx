import React from "react";
import Animated, {FadeOutUp, FadeInUp} from "react-native-reanimated";

const FadeInView = (props?: any) => {

    return(
        <Animated.View
            exiting={FadeOutUp}
            entering={FadeInUp.duration(1000)}
            style={{
                ...props.style,
            }}
        >
            {props.children}
        </Animated.View>

    )
}
export default FadeInView;