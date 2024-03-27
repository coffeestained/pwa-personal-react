import { Splash } from "./features/splash/splash";
import { CodeFormatter } from "./features/tools/code-formatter/code-formatter";
import { ColorConverter } from "./features/tools/color-converter/color-converter";
import { RegularExpression } from "./features/tools/regular-expression/regular-expression";
import { StructuredDataConversion } from "./features/tools/structured-data-conversion/structured-data-conversion";

export const routes = {
    "/tools": {
        name: "Splash",
        component: Splash,
    },
    // "/tools/format": {
    //     name: "Code Formatter",
    //     component: CodeFormatter,
    // },
    "/tools/color-conversion": {
        name: "Color Conversion",
        component: ColorConverter,
    },
    "/tools/structured-data": {
        name: "Structured Data Conversion",
        component: StructuredDataConversion,
    },
    "/tools/regular-expression": {
        name: "Regular Expression",
        component: RegularExpression,
    },
}