/** ****************************
 * Bytecode to send to the massa network that push the `helloworld`
 * smartcontract.
 *
 * N.B. The entry file of your Massa Smart Contract program should be named
 * `src/main.ts`, the command `yarn bundle` will produce an `build/main.wasm`
 * which is ready to be send on Massa network node!
 **/

import { create_sc, include_base64, generate_event, call, Context } from "massa-sc-std";
import { JSON } from 'json-as';

export function main(_args: string): void {
    const bytes = include_base64('./build/smart-contract.wasm');
    let addr = create_sc(bytes);
    generate_event("Address = " + addr);
    // Here example of how to call a smart contract
    generate_event(call(addr, "helloworld", "World", 0));
    generate_event(`${Context.get_call_stack()[0]}`)
}
