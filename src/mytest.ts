/** ***************************************************************************
 * This file show you an example of how to call a smart contract
 * 
 * Once you ran the command `yarn run-sc 
 **/

import { call, print } from "./massa";
 
export function main(_args: string): string {
    const addr = "FcRuD46Ib1A="; // Replace the address 
    const func = "helloworld"; // Replace the function
    const args = "Adrien!"; // Replace the function
    print(call(addr, func, args));
    return "0"
}
