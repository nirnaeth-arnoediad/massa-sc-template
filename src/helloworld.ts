/** ***********************
 * Smart contract exporting a public function `helloworld`
 **/
import { JSON } from "json-as";

export function helloworld(name: string): string {
    return `hello hello ${name}`;
}

@json
class namesValue {
    names: string[]
    value: number
}

export function helloAll(names: string): string {
    let n = JSON.parse<namesValue>(names);
    return `hello ${n.value} ${n.names.join(' ')}`
}