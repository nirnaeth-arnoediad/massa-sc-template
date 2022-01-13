/** ****************************
 * Bytecode to send to the massa network that push the `helloworld`
 * smartcontract.
 **/

import { create_sc, include_base64, print, call, get_call_stack } from "./massa";
import { JSON } from 'json-as';

@json
class namesValue {
    names: string[]
    value: number
}

export function main(_args: string): i32 {
    const bytes = include_base64('./build/helloworld.wasm');
    let addr = create_sc(bytes);
    print("Address = " + addr);
    print(call(addr, "helloworld", "Adrien!"));


    let names = ["Adrien", "Yvan"];
    print(call(addr, "helloAll", JSON.stringify<namesValue>({
        names: names,
        value: 0
    })));
    print(`${JSON.parse<string[]>(get_call_stack())[0]}`)
    return 0;
}
