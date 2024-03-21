import { Splash } from "./features/splash/splash";
import { CodeFormatter } from "./features/tools/code-formatter/code-formatter";
import { ColorConverter } from "./features/tools/color-converter/color-converter";

export const routes = {
    "/tools": {
        name: "Splash",
        component: Splash,
    },
    "/tools/format": {
        name: "Code Formatter",
        component: CodeFormatter,
    },
    "/tools/color-conversion": {
        name: "Color Conversion",
        component: ColorConverter,
    },
}