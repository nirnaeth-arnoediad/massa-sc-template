/** ****************************
 * Bytecode to send to the massa network that push the `helloworld`
 * smartcontract.
 **/

import { create_sc, include_base64, print } from "./massa";

export function main(_args: string): i32 {
    const bytes = include_base64('./build/helloworld.wasm');
    print(`Smart contract created at address ${create_sc(bytes)}`);
    return 0;
}
