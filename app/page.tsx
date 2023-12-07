import {Badge} from './badge'
import {css} from '@shadow-panda/styled-system/css';

export default function Home() {
    return (
        <>
            <Badge>Badge</Badge>
            <div className={css({fontSize: "2xl", fontWeight: 'bold'})}>Hello 🐼!</div>
        </>
    )
}
