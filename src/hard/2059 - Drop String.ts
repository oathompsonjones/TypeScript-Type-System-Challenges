/*
    2059 - Drop String
    -------
    by CaptainOfPhB (@CaptainOfPhB) #hard #template-literal #infer

    ### Question

    Drop the specified chars from a string.

    For example:

    ```ts
    type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
    ```

    > View on GitHub: https://tsch.js.org/2059
*/

/* _____________ Your Code Here _____________ */

type Chars<T extends string> = T extends `${infer L}${infer R}`
    ? Chars<R> | L
    : never;
type DropString<S extends string, T extends string> = S extends `${infer L}${infer R}`
    ? L extends Chars<T>
        ? DropString<R, T>
        : `${L}${DropString<R, T>}`
    : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

export type Cases = [
    Expect<Equal<DropString<"butter fly!", "">, "butter fly!">>,
    Expect<Equal<DropString<"butter fly!", " ">, "butterfly!">>,
    Expect<Equal<DropString<"butter fly!", "but">, "er fly!">>,
    Expect<Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">>,
    Expect<Equal<DropString<"    butter fly!        ", " ">, "butterfly!">>,
    Expect<Equal<DropString<" b u t t e r f l y ! ", " ">, "butterfly!">>,
    Expect<Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">>,
    Expect<Equal<DropString<" b u t t e r f l y ! ", "tub">, "     e r f l y ! ">>,
    Expect<Equal<DropString<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
    Expect<Equal<DropString<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
];

/* _____________ Further Steps _____________ */
/*
    > Share your solutions: https://tsch.js.org/2059/answer
    > View solutions: https://tsch.js.org/2059/solutions
    > More Challenges: https://tsch.js.org
*/
