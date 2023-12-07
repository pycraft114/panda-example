import {Badge} from './badge'
import {css} from '@shadow-panda/styled-system/css';
import {pandaBadge} from "@/src/app/recipe";

export default function Home() {
    return (
        <>
            <Badge className={pandaBadge({ visual: 'increase' })} ml={"8px"}>badge</Badge>
            <div className={css({fontSize: "2xl", fontWeight: 'bold'})}>Hello 🐼!</div>
        </>
    )
}
