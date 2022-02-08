/** ****************************
 * Bytecode to send to the massa network that push the `helloworld`
 * smartcontract.
 **/

import { create_sc, include_base64, print, call, Context } from "massa-sc-std";
import { JSON } from 'json-as';

export function main(_args: string): string {
    const bytes = include_base64('./build/helloworld.wasm');
    let addr = create_sc(bytes);
    print("Address = " + addr);
    print(call(addr, "helloworld", "Adrien!", 0));
    print(`${JSON.parse<string[]>(Context.get_call_stack())[0]}`)
    return "ok";
}
