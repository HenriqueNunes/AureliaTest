import {FrameworkConfiguration} from "aurelia-framework"

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources(["value-converters/upperCollection", "value-converters/upper", "custom-elements/blur-image"]);
}
