import {FrameworkConfiguration} from "aurelia-framework"

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources(["./upperCollection", "./upper"]);
}
