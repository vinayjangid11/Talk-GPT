import { useEffect, useState } from "react";

const Answer = ({ ans, totalResult, index, type}) => {

    const [heading, setHeading] = useState(false);
    const [answer, setAnswer] = useState(ans);



    useEffect(() => {
        if (checkHeading(ans)) {
            setHeading(true);
            setAnswer(replaceHeadingStars(ans));
        }

    }, [])
    //helper.js

    function checkHeading(str) {
        return /^(\*)(\*)(.*)\*$/.test(str)
    }
    function replaceHeadingStars(str) {
        return str.replace(/^(\*)(\*)|(\*)$/g, '');
    }

    return (
        <>

            {
                index==0 && totalResult>1?
                    (<span className="pt-2 text-xl block text-white">{answer}</span>):
                    heading ?
                        (<span className="pt-2 text-lg block text-white">{answer}</span>):
                        (<span className={type=='q'?'pl-1':'pl-5'}>{answer}</span>)
            }
        </>
    )
}
export default Answer;